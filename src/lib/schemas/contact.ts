import { z } from 'zod';

// Contact form schema
export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  goal: z.string().min(10, 'Please describe your goal or challenge').max(1000, 'Description is too long'),
  budget_range: z.enum(['under_100k', '100k_500k', '500k_1m', 'over_1m']).optional(),
  timeline_target: z.enum(['urgent', 'standard', 'flexible']).optional(),
  nda: z.boolean().optional(),
  consent: z.boolean().refine((val) => val === true, 'You must consent to being contacted'),
  // Honeypot field - should remain empty
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// API response schemas
export const ContactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  id: z.string().optional(),
});

export type ContactResponse = z.infer<typeof ContactResponseSchema>;
