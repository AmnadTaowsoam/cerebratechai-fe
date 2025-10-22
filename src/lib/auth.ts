import { apiClient } from './api-client';

// Auth types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Auth service
export class AuthService {
  private static instance: AuthService;
  private authState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  };

  private listeners: Set<(state: AuthState) => void> = new Set();

  private constructor() {
    this.initializeAuth();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private initializeAuth() {
    // Check for stored token
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        this.setToken(token);
        this.validateToken();
      } else {
        this.setLoading(false);
      }
    }
  }

  private setLoading(loading: boolean) {
    this.authState.isLoading = loading;
    this.notifyListeners();
  }

  private setToken(token: string | null) {
    this.authState.token = token;
    this.authState.isAuthenticated = !!token;
    
    if (token) {
      apiClient.setAuthToken(token);
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', token);
      }
    } else {
      apiClient.clearAuthToken();
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
      }
    }
  }

  private setUser(user: User | null) {
    this.authState.user = user;
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.authState));
  }

  // Public methods
  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    try {
      this.setLoading(true);
      
      const response = await apiClient.post('/auth/login', { email, password }) as any;
      
      if (response.success && response.token) {
        this.setToken(response.token);
        this.setUser(response.user);
        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: response.message || 'Login failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Login failed' 
      };
    } finally {
      this.setLoading(false);
    }
  }

  async register(userData: { name: string; email: string; password: string }): Promise<{ success: boolean; message: string }> {
    try {
      this.setLoading(true);
      
      const response = await apiClient.post('/auth/register', userData) as any;
      
      if (response.success && response.token) {
        this.setToken(response.token);
        this.setUser(response.user);
        return { success: true, message: 'Registration successful' };
      } else {
        return { success: false, message: response.message || 'Registration failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Registration failed' 
      };
    } finally {
      this.setLoading(false);
    }
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.setToken(null);
      this.setUser(null);
    }
  }

  async validateToken(): Promise<boolean> {
    try {
      const response = await apiClient.get('/auth/me') as any;
      
      if (response.success && response.user) {
        this.setUser(response.user);
        return true;
      } else {
        this.setToken(null);
        this.setUser(null);
        return false;
      }
    } catch (error) {
      this.setToken(null);
      this.setUser(null);
      return false;
    } finally {
      this.setLoading(false);
    }
  }

  getState(): AuthState {
    return { ...this.authState };
  }

  subscribe(listener: (state: AuthState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Role-based access control
  hasRole(role: string): boolean {
    return this.authState.user?.role === role;
  }

  isAdmin(): boolean {
    return this.hasRole('admin');
  }
}

// Export singleton instance
export const authService = AuthService.getInstance();
