'use client';

import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { AnalyticsEvent, PageViewEvent, CtaClickEvent, FormSubmitEvent, WebVitalsEvent } from '@/lib/schemas/analytics';

// Analytics hook
export function useAnalytics() {
  const pathname = usePathname();

  // Check if analytics is enabled
  const isAnalyticsEnabled = process.env.NODE_ENV === 'production' && 
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'false';

  // Track page view
  const trackPageView = useCallback((title: string, url?: string) => {
    if (!isAnalyticsEnabled) return;

    const event: PageViewEvent = {
      page: pathname,
      title,
      url: url || window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
    };

    // Send to analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pageview', data: event }),
    }).catch(console.error);
  }, [pathname, isAnalyticsEnabled]);

  // Track CTA click
  const trackCtaClick = useCallback((ctaId: string, ctaText: string) => {
    if (!isAnalyticsEnabled) return;

    const event: CtaClickEvent = {
      ctaId,
      ctaText,
      page: pathname,
      url: window.location.href,
      timestamp: Date.now(),
    };

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'cta_click', data: event }),
    }).catch(console.error);
  }, [pathname, isAnalyticsEnabled]);

  // Track form submit
  const trackFormSubmit = useCallback((formId: string, formType: string) => {
    if (!isAnalyticsEnabled) return;

    const event: FormSubmitEvent = {
      formId,
      formType,
      page: pathname,
      url: window.location.href,
      timestamp: Date.now(),
    };

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'form_submit', data: event }),
    }).catch(console.error);
  }, [pathname, isAnalyticsEnabled]);

  // Track web vitals
  const trackWebVitals = useCallback((metric: string, value: number) => {
    if (!isAnalyticsEnabled) return;

    const event: WebVitalsEvent = {
      metric: metric as any,
      value,
      page: pathname,
      url: window.location.href,
      timestamp: Date.now(),
    };

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'web_vitals', data: event }),
    }).catch(console.error);
  }, [pathname, isAnalyticsEnabled]);

  return {
    trackPageView,
    trackCtaClick,
    trackFormSubmit,
    trackWebVitals,
  };
}
