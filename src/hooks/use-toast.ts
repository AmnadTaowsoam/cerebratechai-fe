'use client';

import { toast } from 'sonner';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
  onAutoClose?: () => void;
}

export function useToast() {
  const showToast = (variant: ToastVariant, options: ToastOptions) => {
    switch (variant) {
      case 'success':
        toast.success(options.title, {
          description: options.description,
          duration: options.duration,
          action: options.action,
          onDismiss: options.onDismiss,
          onAutoClose: options.onAutoClose,
        });
        break;
      case 'error':
        toast.error(options.title, {
          description: options.description,
          duration: options.duration,
          action: options.action,
          onDismiss: options.onDismiss,
          onAutoClose: options.onAutoClose,
        });
        break;
      case 'warning':
        toast.warning(options.title, {
          description: options.description,
          duration: options.duration,
          action: options.action,
          onDismiss: options.onDismiss,
          onAutoClose: options.onAutoClose,
        });
        break;
      case 'info':
        toast.info(options.title, {
          description: options.description,
          duration: options.duration,
          action: options.action,
          onDismiss: options.onDismiss,
          onAutoClose: options.onAutoClose,
        });
        break;
      default:
        toast(options.title, {
          description: options.description,
          duration: options.duration,
          action: options.action,
          onDismiss: options.onDismiss,
          onAutoClose: options.onAutoClose,
        });
        break;
    }
  };

  return { toast: showToast };
}