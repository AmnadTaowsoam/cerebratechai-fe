import { z } from 'zod';
import { services, packages, caseStudies } from '@/data/content';

// Re-export data for convenience
export { services, packages, caseStudies };

// Locale helper
export const getLocalized = <T extends { th: string; en: string }>(
  locale: string,
  value: T
): string => {
  return locale.startsWith('th') ? value.th : value.en;
};

// Service loaders
export async function listServices(options?: {
  category?: string;
  limit?: number;
  locale?: string;
}) {
  let filtered = [...services];

  if (options?.category) {
    filtered = filtered.filter(s => s.category === options.category);
  }

  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

export async function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug) || null;
}

// Package loaders
export async function listPackages(options?: { limit?: number }) {
  let filtered = [...packages];

  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

export async function getPackageBySlug(slug: string) {
  return packages.find(p => p.slug === slug) || null;
}

// Case study loaders
export async function listCaseStudies(options?: { limit?: number }) {
  let filtered = [...caseStudies];

  if (options?.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

export async function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug) || null;
}

// Type exports
export type {
  ServiceItem,
  PackageItem,
  CaseStudyItem,
  ProcessStep,
  ValueCard,
  LocaleValue,
} from '@/data/content';
