'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse text-text-muted">Loading...</div>
  </div>
);

// Lazy load heavy landing page sections
export const LazyRAGDemoSection = dynamic(
  () => import('@/components/rag/rag-demo-section').then(mod => ({ default: mod.RAGDemoSection })),
  {
    loading: LoadingFallback,
    ssr: false, // Don't SSR heavy interactive components
  }
);

export const LazyChatGPTAppsSection = dynamic(
  () => import('@/components/landing/chatgpt-apps-section').then(mod => ({ default: mod.ChatGPTAppsSection })),
  {
    loading: LoadingFallback,
    ssr: false,
  }
);

export const LazyCaseShowcaseSection = dynamic(
  () => import('@/components/landing/case-showcase-section').then(mod => ({ default: mod.CaseShowcaseSection })),
  {
    loading: LoadingFallback,
  }
);

export const LazyPackagesPreviewSection = dynamic(
  () => import('@/components/landing/packages-preview-section').then(mod => ({ default: mod.PackagesPreviewSection })),
  {
    loading: LoadingFallback,
  }
);

export const LazyWebVitalsClient = dynamic(
  () => import('@/components/metrics/web-vitals-client').then(mod => ({ default: mod.WebVitalsClient })),
  {
    ssr: false,
  }
);

// Lazy load contact form (below the fold)
export const LazyContactForm = dynamic(
  () => import('@/components/landing/contact-form').then(mod => ({ default: mod.ContactForm })),
  {
    loading: LoadingFallback,
  }
);
