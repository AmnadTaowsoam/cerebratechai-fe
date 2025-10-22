// Analytics configuration and utilities
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  
  // PostHog
  POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  
  // Vercel Analytics
  VERCEL_ANALYTICS: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === 'true',
  
  // Custom analytics endpoint
  CUSTOM_ENDPOINT: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT,
};

// Event tracking functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // PostHog
  if (ANALYTICS_CONFIG.POSTHOG_KEY && window.posthog) {
    window.posthog.capture(eventName, properties);
  }

  // Custom analytics
  if (ANALYTICS_CONFIG.CUSTOM_ENDPOINT) {
    fetch(ANALYTICS_CONFIG.CUSTOM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventName, properties }),
    }).catch(console.error);
  }
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }

  // PostHog
  if (ANALYTICS_CONFIG.POSTHOG_KEY && window.posthog) {
    window.posthog.capture('$pageview', { $current_url: url, $title: title });
  }

  // Custom analytics
  trackEvent('page_view', { url, title });
};

// E-commerce tracking
export const trackPurchase = (transactionId: string, value: number, currency: string = 'THB') => {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }

  // PostHog
  if (ANALYTICS_CONFIG.POSTHOG_KEY && window.posthog) {
    window.posthog.capture('purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }

  // Custom analytics
  trackEvent('purchase', { transactionId, value, currency });
};

// Form submission tracking
export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', { form_name: formName, form_type: formType });
};

// CTA click tracking
export const trackCtaClick = (ctaId: string, ctaText: string, page: string) => {
  trackEvent('cta_click', { cta_id: ctaId, cta_text: ctaText, page });
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  trackEvent('error', {
    error_message: error.message,
    error_stack: error.stack,
    context,
  });
};

// Performance tracking
export const trackPerformance = (metricName: string, value: number, unit: string = 'ms') => {
  trackEvent('performance', {
    metric_name: metricName,
    value,
    unit,
  });
};

// User identification
export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // PostHog
  if (ANALYTICS_CONFIG.POSTHOG_KEY && window.posthog) {
    window.posthog.identify(userId, userProperties);
  }

  // Google Analytics 4
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
      user_id: userId,
      custom_map: userProperties,
    });
  }
};

// Declare global types for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
      identify: (userId: string, properties?: Record<string, any>) => void;
    };
  }
}
