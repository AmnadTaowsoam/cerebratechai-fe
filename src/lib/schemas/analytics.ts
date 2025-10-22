import { z } from 'zod';

// Page view event schema
export const PageViewEventSchema = z.object({
  page: z.string(),
  title: z.string(),
  url: z.string().url(),
  referrer: z.string().optional(),
  userAgent: z.string().optional(),
  timestamp: z.number(),
});

export type PageViewEvent = z.infer<typeof PageViewEventSchema>;

// CTA click event schema
export const CtaClickEventSchema = z.object({
  ctaId: z.string(),
  ctaText: z.string(),
  page: z.string(),
  url: z.string().url(),
  timestamp: z.number(),
});

export type CtaClickEvent = z.infer<typeof CtaClickEventSchema>;

// Form submit event schema
export const FormSubmitEventSchema = z.object({
  formId: z.string(),
  formType: z.string(),
  page: z.string(),
  url: z.string().url(),
  timestamp: z.number(),
});

export type FormSubmitEvent = z.infer<typeof FormSubmitEventSchema>;

// Web vitals event schema
export const WebVitalsEventSchema = z.object({
  metric: z.enum(['CLS', 'FID', 'FCP', 'LCP', 'TTFB']),
  value: z.number(),
  page: z.string(),
  url: z.string().url(),
  timestamp: z.number(),
});

export type WebVitalsEvent = z.infer<typeof WebVitalsEventSchema>;

// Union type for all analytics events
export const AnalyticsEventSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('pageview'), data: PageViewEventSchema }),
  z.object({ type: z.literal('cta_click'), data: CtaClickEventSchema }),
  z.object({ type: z.literal('form_submit'), data: FormSubmitEventSchema }),
  z.object({ type: z.literal('web_vitals'), data: WebVitalsEventSchema }),
]);

export type AnalyticsEvent = z.infer<typeof AnalyticsEventSchema>;

// API response schemas
export const AnalyticsResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type AnalyticsResponse = z.infer<typeof AnalyticsResponseSchema>;
