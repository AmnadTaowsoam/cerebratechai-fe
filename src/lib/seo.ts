import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  locale?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/cerebratechai_logo.png',
  url = '/',
  type = 'website',
  locale = 'en',
}: SEOProps): Metadata {
  const siteName = 'CerebraTechAI';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription =
    description ||
    'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.';
  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${url}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      ...keywords,
      'AI',
      'Machine Learning',
      'Computer Vision',
      'Cloud Computing',
      'Full-Stack Development',
      'Edge Computing',
    ],
    authors: [{ name: 'CerebraTechAI Team' }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    ),
    alternates: {
      canonical: url,
      languages: {
        en: `/en${url}`,
        th: `/th${url}`,
      },
    },
    openGraph: {
      type,
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredData({
  type,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service';
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${baseUrl}${url}`;

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: fullUrl,
    ...(image && { image: `${baseUrl}${image}` }),
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        '@type': 'Organization',
        logo: `${baseUrl}/logo.png`,
        sameAs: [
          'https://twitter.com/cerebratechai',
          'https://linkedin.com/company/cerebratechai',
          'https://github.com/cerebratechai',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+66-XX-XXX-XXXX',
          contactType: 'customer service',
          availableLanguage: ['English', 'Thai'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TH',
          addressLocality: 'Bangkok',
        },
      };

    case 'WebSite':
      return {
        ...baseData,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'Article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: title,
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        ...(author && {
          author: {
            '@type': 'Person',
            name: author,
          },
        }),
        publisher: {
          '@type': 'Organization',
          name: 'CerebraTechAI',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
      };

    case 'Service':
      return {
        ...baseData,
        '@type': 'Service',
        provider: {
          '@type': 'Organization',
          name: 'CerebraTechAI',
        },
        serviceType: 'AI & Full-Stack Solutions',
        areaServed: {
          '@type': 'Country',
          name: 'Thailand',
        },
        availableLanguage: ['English', 'Thai'],
      };

    default:
      return baseData;
  }
}
