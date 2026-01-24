// Skill Router API Client for Frontend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7000';

export interface RouteResult {
  ok: boolean;
  skill: string;
  confidence: number;
  lang: 'th' | 'en';
  error?: string;
  message?: string;
}

export interface ToolResult {
  ok: boolean;
  data?: any;
  error?: string;
}

export interface Tool {
  id: string;
  name_th: string;
  name_en: string;
  desc_th: string;
  desc_en: string;
  rate_limit: string;
  enabled: boolean;
}

export const skillsAPI = {
  /**
   * Route query to appropriate skill
   */
  route: async (query: string): Promise<RouteResult> => {
    const response = await fetch(`${API_URL}/api/skills/route`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: query }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to route query');
    }

    return response.json();
  },

  /**
   * Execute tool
   */
  execute: async (tool: string, args: any): Promise<ToolResult> => {
    const response = await fetch(`${API_URL}/api/skills/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool, args }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to execute tool');
    }

    return response.json();
  },

  /**
   * List available tools
   */
  listTools: async (): Promise<{ ok: boolean; tools: Tool[] }> => {
    const response = await fetch(`${API_URL}/api/skills/tools`);

    if (!response.ok) {
      throw new Error('Failed to list tools');
    }

    return response.json();
  },

  /**
   * Smart query handler (route + execute automatically)
   */
  smartQuery: async (query: string): Promise<any> => {
    // Step 1: Route to skill
    const routeResult = await skillsAPI.route(query);

    if (!routeResult.ok) {
      throw new Error(routeResult.error || 'Routing failed');
    }

    const { skill, confidence, lang } = routeResult;

    // Step 2: For tool-based skills, execute the tool
    const toolMap: Record<string, string> = {
      Math: 'math.calc',
      Date: 'date.delta',
      Unit: 'unit.convert',
      Regex: 'regex.test',
      Code: 'code.format',
      Translate: 'translate.th_en',
      RAG: 'rag.search',
    };

    if (toolMap[skill]) {
      // Extract args from query (simplified)
      const args = await skillsAPI.parseToolArgs(query, skill);
      const result = await skillsAPI.execute(toolMap[skill], args);

      return {
        ...result,
        skill,
        confidence,
        lang,
      };
    }

    // For Direct skill, return info to use LLM
    return {
      ok: true,
      skill,
      confidence,
      lang,
      message: 'Use direct LLM for this query',
      requiresLLM: true,
    };
  },

  /**
   * Parse tool arguments from query (simple implementation)
   * In production, this should use LLM to extract structured args
   */
  parseToolArgs: async (query: string, skill: string): Promise<any> => {
    switch (skill) {
      case 'Math':
        // Extract mathematical expression
        return { expr: query.replace(/คำนวณ|calculate|compute/gi, '').trim() };

      case 'RAG':
        return { q: query, k: 6 };

      case 'Translate':
        // Remove translation keywords
        const text = query
          .replace(/แปล|translate|เป็นอังกฤษ|เป็นไทย|to english|to thai/gi, '')
          .replace(/[:：]/g, '')
          .trim();
        return { text };

      case 'Unit':
        return { query };

      case 'Date':
        return { query };

      case 'Regex':
        return { query };

      case 'Code':
        return { code: query };

      default:
        return { query };
    }
  },

  /**
   * Health check
   */
  health: async (): Promise<any> => {
    const response = await fetch(`${API_URL}/api/skills/health`);
    return response.json();
  },
};
