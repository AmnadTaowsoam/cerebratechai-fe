'use client';

import { useState, useEffect } from 'react';
import { authService, AuthState, User } from '@/lib/auth';

// Auth hook
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>(authService.getState());

  useEffect(() => {
    const unsubscribe = authService.subscribe(setAuthState);
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    return authService.login(email, password);
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    return authService.register(userData);
  };

  const logout = async () => {
    await authService.logout();
  };

  const hasRole = (role: string) => {
    return authService.hasRole(role);
  };

  const isAdmin = () => {
    return authService.isAdmin();
  };

  return {
    ...authState,
    login,
    register,
    logout,
    hasRole,
    isAdmin,
  };
}
