// SEO Components
export { SeoHead } from './SeoHead';
export { Breadcrumbs, generateBreadcrumbs } from './Breadcrumbs';
export { BreadcrumbsAuto } from './BreadcrumbsAuto';
export { JsonLd, OrganizationJsonLd, WebsiteJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from './JsonLd';
export { PerformanceOptimizations, WebVitalsScript, ResourceHints } from './PerformanceOptimizations';
export { Hreflang, StaticHreflang } from './Hreflang';
export { PricingSchema, ServiceSchema, FAQSchema } from './PricingSchema';
export { FAQSection } from './FAQ';
export { HomeFAQs, PricingFAQs, TrustFAQs } from './faq-data';
export { ArticleSchema } from './ArticleSchema';

// Analytics
export { Analytics } from '../analytics/Analytics';

// Loading Components
export { LoadingSpinner, LoadingDots, LoadingSkeleton, PageLoading, SectionLoading } from '../ui/loading';

// SEO Utilities
export { generateMetadata, generateStructuredData } from '@/lib/seo';
