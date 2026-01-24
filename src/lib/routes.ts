/**
 * Type-safe route helper for Next.js Link components
 * Provides typed route generation to avoid `as any` casts
 */

import type { Route } from 'next';

/**
 * Base path with locale prefix
 */
function withBasePath(path: string, locale: string): string {
  return `/${locale}${path}`;
}

/**
 * Type-safe route helper
 * Returns properly typed routes for Next.js Link components
 */
export const routes = {
  home: (locale: string): Route => `/${locale}` as Route,

  about: (locale: string): Route => withBasePath('/about', locale) as Route,

  contact: (locale: string): Route => withBasePath('/contact', locale) as Route,

  login: (locale: string): Route => withBasePath('/login', locale) as Route,

  register: (locale: string): Route =>
    withBasePath('/register', locale) as Route,

  dashboard: (locale: string): Route =>
    withBasePath('/dashboard', locale) as Route,

  faq: (locale: string): Route => withBasePath('/faq', locale) as Route,

  howWeWork: (locale: string): Route =>
    withBasePath('/how-we-work', locale) as Route,

  careers: (locale: string): Route => withBasePath('/careers', locale) as Route,

  partners: (locale: string): Route =>
    withBasePath('/partners', locale) as Route,

  trust: (locale: string): Route => withBasePath('/trust', locale) as Route,

  pricing: (locale: string): Route => withBasePath('/pricing', locale) as Route,

  packages: (locale: string): Route =>
    withBasePath('/packages', locale) as Route,

  packageDetail: (locale: string, slug: string): Route =>
    withBasePath(`/packages/${slug}`, locale) as Route,

  blog: (locale: string): Route => withBasePath('/blog', locale) as Route,

  blogDetail: (locale: string, slug: string): Route =>
    withBasePath(`/blog/${slug}`, locale) as Route,

  cases: (locale: string): Route => withBasePath('/cases', locale) as Route,

  caseDetail: (locale: string, slug: string): Route =>
    withBasePath(`/cases/${slug}`, locale) as Route,

  resources: (locale: string): Route =>
    withBasePath('/resources', locale) as Route,

  resourceDetail: (locale: string, slug: string): Route =>
    withBasePath(`/resources/${slug}`, locale) as Route,

  news: (locale: string): Route => withBasePath('/news', locale) as Route,

  support: (locale: string): Route => withBasePath('/support', locale) as Route,

  solutions: (locale: string): Route =>
    withBasePath('/solutions', locale) as Route,

  solutionDetail: (locale: string, slug: string): Route =>
    withBasePath(`/solutions/${slug}`, locale) as Route,

  industries: (locale: string): Route =>
    withBasePath('/industries', locale) as Route,

  industryDetail: (locale: string, slug: string): Route =>
    withBasePath(`/industries/${slug}`, locale) as Route,

  products: (locale: string): Route =>
    withBasePath('/products', locale) as Route,

  productDetail: (locale: string, slug: string): Route =>
    withBasePath(`/products/${slug}`, locale) as Route,

  // Legal pages
  legal: {
    terms: (locale: string): Route =>
      withBasePath('/legal/terms', locale) as Route,
    privacy: (locale: string): Route =>
      withBasePath('/legal/privacy', locale) as Route,
    cookies: (locale: string): Route =>
      withBasePath('/legal/cookies', locale) as Route,
    disclaimer: (locale: string): Route =>
      withBasePath('/legal/disclaimer', locale) as Route,
    pdpa: (locale: string): Route =>
      withBasePath('/legal/pdpa', locale) as Route,
    dsar: (locale: string): Route =>
      withBasePath('/legal/dsar', locale) as Route,
    refund: (locale: string): Route =>
      withBasePath('/legal/refund', locale) as Route,
  },
};

/**
 * Helper to create a typed route from a path string
 * Use this for dynamic routes not covered by the routes object
 */
export function createRoute(path: string, locale: string): Route {
  return withBasePath(path, locale) as Route;
}

/**
 * Helper to create a typed route from a full URL string
 * Use this for external URLs or absolute paths
 */
export function createExternalRoute(url: string): Route {
  return url as Route;
}
