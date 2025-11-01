import { z } from 'zod';

// Contact form schema - must match backend LeadSchema
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must not exceed 100 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  goal: z.string().min(8, 'Goal must be at least 8 characters').max(1000, 'Goal must not exceed 1000 characters'),
  budget_range: z.string().optional(), // Backend accepts string, not enum
  timeline_target: z.enum(['urgent', 'standard', 'flexible']).optional(),
  nda: z.boolean().optional(),
  consent: z.boolean().refine((val) => val === true, 'You must consent to being contacted'),
  // Honeypot field - should remain empty
  website: z.string().max(0).optional(),
  locale: z.enum(['th', 'en']).optional(),
  // Anti-spam fields
  hp_time: z.number().optional(),
  user_agent: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// API response schemas
export const ContactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string().optional(),
});

export type ContactResponse = z.infer<typeof ContactResponseSchema>;
