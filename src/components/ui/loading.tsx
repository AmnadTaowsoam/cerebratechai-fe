'use client';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeClasses[size],
        className
      )}
    />
  );
}

interface LoadingDotsProps {
  className?: string;
}

export function LoadingDots({ className }: LoadingDotsProps) {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-current" />
    </div>
  );
}

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
}

export function LoadingSkeleton({
  className,
  lines = 1,
}: LoadingSkeletonProps) {
  return (
    <div className={cn('animate-pulse', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn('h-4 bg-surface rounded', i < lines - 1 && 'mb-2')}
        />
      ))}
    </div>
  );
}

interface PageLoadingProps {
  message?: string;
}

export function PageLoading({ message = 'Loading...' }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4 text-primary" />
        <p className="text-text-muted">{message}</p>
      </div>
    </div>
  );
}

interface SectionLoadingProps {
  className?: string;
}

export function SectionLoading({ className }: SectionLoadingProps) {
  return (
    <div className={cn('py-12', className)}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4 text-primary" />
          <p className="text-text-muted">Loading content...</p>
        </div>
      </div>
    </div>
  );
}
