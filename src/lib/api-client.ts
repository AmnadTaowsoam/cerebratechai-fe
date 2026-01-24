import { z } from 'zod';

// Base configuration
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
const API_TIMEOUT = 5000; // 5 seconds (reduced for development)

// Error schema
const ApiErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  details: z.record(z.any()).optional(),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;

// Request configuration
interface RequestConfig extends RequestInit {
  timeout?: number;
}

// Custom error class
export class ApiClientError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'ApiClientError';
  }
}

// Fetch wrapper with timeout and error handling
async function fetchWithTimeout(
  url: string,
  config: RequestConfig = {}
): Promise<Response> {
  const { timeout = API_TIMEOUT, ...fetchConfig } = config;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchConfig,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiClientError('Request timeout', 408);
    }
    throw error;
  }
}

// Parse error response
async function parseError(response: Response): Promise<ApiClientError> {
  try {
    const errorData = await response.json();
    const parsed = ApiErrorSchema.parse(errorData);
    return new ApiClientError(
      parsed.message,
      response.status,
      parsed.code,
      parsed.details
    );
  } catch {
    return new ApiClientError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status
    );
  }
}

// Main API client class
export class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Set authentication token
  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Clear authentication token
  clearAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  // Generic request method
  async request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    const url = endpoint.startsWith('http')
      ? endpoint
      : `${this.baseURL}${endpoint}`;
    const headers = { ...this.defaultHeaders, ...config.headers };

    try {
      const response = await fetchWithTimeout(url, {
        ...config,
        headers,
      });

      if (!response.ok) {
        throw await parseError(response);
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error;
      }
      throw new ApiClientError(
        error instanceof Error ? error.message : 'Unknown error occurred'
      );
    }
  }

  // HTTP method helpers
  async get<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

// Create default instance
export const apiClient = new ApiClient();

// Skill Router API helpers
export const skillRouter = {
  /**
   * Route query to appropriate skill
   */
  async route(
    query: string
  ): Promise<{ ok: boolean; skill: string; confidence: number; lang: string }> {
    return apiClient.post('/api/skills/route', { q: query });
  },

  /**
   * Execute tool
   */
  async execute(
    tool: string,
    args: Record<string, any>
  ): Promise<{ ok: boolean; data?: any; error?: string }> {
    return apiClient.post('/api/skills/execute', { tool, args });
  },

  /**
   * List available tools
   */
  async listTools(): Promise<{ ok: boolean; tools: any[] }> {
    return apiClient.get('/api/skills/tools');
  },
};

// RAG API helpers
export const rag = {
  /**
   * Query RAG system
   */
  async query(query: string, topK?: number): Promise<any> {
    return apiClient.post('/api/rag/query', { query, topK });
  },

  /**
   * Stream RAG response (SSE)
   */
  async queryStream(query: string, topK?: number): Promise<ReadableStream> {
    const response = await fetch(`${API_BASE_URL}/api/rag/query/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, topK }),
    });
    if (!response.ok || !response.body) {
      throw new Error('Stream failed');
    }
    return response.body;
  },
};

// Export types
export type { RequestConfig };
