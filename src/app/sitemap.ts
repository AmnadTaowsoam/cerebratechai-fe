import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const locales = ['en', 'th'];

  // Define all routes with their priorities and change frequencies
  const routes = [
    // Main pages
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/solutions', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/packages', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/cases', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/trust', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/how-we-work', priority: 0.7, changeFreq: 'monthly' as const },

    // Services pages
    {
      path: '/services/consulting',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/services/development',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/services/deployment',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },

    // Solutions pages
    { path: '/solutions/ml', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/solutions/cv', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/solutions/llm', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/solutions/aiot', priority: 0.8, changeFreq: 'weekly' as const },
    {
      path: '/solutions/platform',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/solutions/analytics',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },

    // Industries pages
    { path: '/industries', priority: 0.8, changeFreq: 'weekly' as const },
    {
      path: '/industries/manufacturing',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/industries/agriculture',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/industries/healthcare',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/industries/enterprise',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },

    // Product pages
    { path: '/products', priority: 0.9, changeFreq: 'weekly' as const },
    {
      path: '/products/smartfarm',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/products/cerebraforge',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/products/chartsentinel',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    { path: '/products/vetpath', priority: 0.9, changeFreq: 'weekly' as const },
    {
      path: '/products/skill400',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/products/cerebra-api',
      priority: 0.9,
      changeFreq: 'weekly' as const,
    },

    // Package pages
    {
      path: '/packages/kickstart',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    { path: '/packages/poc-lab', priority: 0.8, changeFreq: 'weekly' as const },
    {
      path: '/packages/pilot-launch',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },
    {
      path: '/packages/production-scale',
      priority: 0.8,
      changeFreq: 'weekly' as const,
    },

    // Legal pages
    { path: '/legal/privacy', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/legal/terms', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/legal/cookies', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/legal/refund', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/legal/disclaimer', priority: 0.5, changeFreq: 'yearly' as const },
    { path: '/legal/pdpa', priority: 0.5, changeFreq: 'yearly' as const },

    // Other pages
    { path: '/support', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/resources', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/partners', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/careers', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/news', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/faq', priority: 0.6, changeFreq: 'monthly' as const },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and route
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
      });
    });
  });

  // Add case study pages dynamically (if you have them)
  const caseStudies = [
    'malai-thai-ceremony-management',
    'dulaedee-dual-mode-wellness',
    'quality-inspection-factory',
    'edge-computer-vision',
  ];

  locales.forEach(locale => {
    caseStudies.forEach(caseSlug => {
      sitemap.push({
        url: `${baseUrl}/${locale}/cases/${caseSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return sitemap;
}
