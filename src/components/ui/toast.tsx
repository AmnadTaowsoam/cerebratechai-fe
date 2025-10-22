import { cn } from '@/lib/utils';
import * as React from 'react';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  heading?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, heading, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
          variant === 'destructive' &&
            'destructive group border-destructive bg-destructive text-destructive-foreground',
          variant === 'success' && 'border-success bg-success text-white',
          variant === 'warning' && 'border-warning bg-warning text-white',
          variant === 'info' && 'border-info bg-info text-white',
          className,
        )}
        {...props}
      >
        <div className="grid gap-1">
          {heading && <div className="text-sm font-semibold">{heading}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        {action}
      </div>
    );
  },
);
Toast.displayName = 'Toast';

export { Toast };