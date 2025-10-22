'use client';

import { useEffect } from 'react';
import { useAnalytics } from './use-analytics';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Web vitals hook
export function useWebVitals() {
  const { trackWebVitals } = useAnalytics();

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Track web vitals
    getCLS((metric) => trackWebVitals('CLS', metric.value));
    getFID((metric) => trackWebVitals('FID', metric.value));
    getFCP((metric) => trackWebVitals('FCP', metric.value));
    getLCP((metric) => trackWebVitals('LCP', metric.value));
    getTTFB((metric) => trackWebVitals('TTFB', metric.value));
  }, [trackWebVitals]);
}