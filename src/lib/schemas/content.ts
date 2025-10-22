import { z } from 'zod';

// Base content schema
const BaseContentSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  locale: z.enum(['en', 'th']),
});

// Service schema
export const ServiceSchema = BaseContentSchema.extend({
  type: z.literal('service'),
  category: z.enum(['ml', 'cv', 'aiot', 'llm', 'ocr', 'vector', 'frontend', 'backend', 'devops', 'spc', 'edge', 'api', 'data', 'mlops', 'label', 'yolo', 'hyperparameter', 'messaging', 'storage', 'security', 'documentation', 'email', 'training']),
  tags: z.array(z.string()),
  features: z.array(z.string()),
  useCases: z.array(z.string()),
  technologies: z.array(z.string()),
  pricing: z.object({
    starting: z.number(),
    currency: z.string(),
    unit: z.string(),
  }),
  timeline: z.object({
    min: z.number(),
    max: z.number(),
    unit: z.string(),
  }),
  deliverables: z.array(z.string()),
  successCriteria: z.array(z.string()),
  seo: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
  }),
});

export type Service = z.infer<typeof ServiceSchema>;

// Package schema
export const PackageSchema = BaseContentSchema.extend({
  type: z.literal('package'),
  tier: z.enum(['kickstart', 'poc', 'pilot', 'production', 'care']),
  scope: z.string(),
  deliverables: z.array(z.string()),
  timeline: z.object({
    min: z.number(),
    max: z.number(),
    unit: z.string(),
  }),
  pricing: z.object({
    starting: z.number(),
    currency: z.string(),
    unit: z.string(),
  }),
  addOns: z.array(z.string()),
  successCriteria: z.array(z.string()),
  seo: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
  }),
});

export type Package = z.infer<typeof PackageSchema>;

// Case study schema
export const CaseStudySchema = BaseContentSchema.extend({
  type: z.literal('case'),
  client: z.string(),
  industry: z.string(),
  challenge: z.string(),
  solution: z.string(),
  results: z.array(z.string()),
  technologies: z.array(z.string()),
  timeline: z.object({
    duration: z.number(),
    unit: z.string(),
  }),
  team: z.object({
    size: z.number(),
    roles: z.array(z.string()),
  }),
  anonymized: z.boolean(),
  seo: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()),
  }),
});

export type CaseStudy = z.infer<typeof CaseStudySchema>;

// Union type for all content
export const ContentSchema = z.discriminatedUnion('type', [
  ServiceSchema,
  PackageSchema,
  CaseStudySchema,
]);

export type Content = z.infer<typeof ContentSchema>;

// API response schemas
export const ContentListResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(ContentSchema),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }),
});

export type ContentListResponse = z.infer<typeof ContentListResponseSchema>;

export const ContentResponseSchema = z.object({
  success: z.boolean(),
  data: ContentSchema,
});

export type ContentResponse = z.infer<typeof ContentResponseSchema>;
