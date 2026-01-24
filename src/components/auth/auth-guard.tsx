'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/hooks/use-auth';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: string;
  redirectTo?: string;
}

export function AuthGuard({
  children,
  requireAuth = true,
  requireRole,
  redirectTo = '/login',
}: AuthGuardProps) {
  const { isAuthenticated, isLoading, hasRole } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo as any);
      return;
    }

    if (requireRole && !hasRole(requireRole)) {
      router.push('/unauthorized' as any);
      return;
    }
  }, [
    isAuthenticated,
    isLoading,
    requireAuth,
    requireRole,
    redirectTo,
    router,
    hasRole,
  ]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return null;
  }

  if (requireRole && !hasRole(requireRole)) {
    return null;
  }

  return <>{children}</>;
}
