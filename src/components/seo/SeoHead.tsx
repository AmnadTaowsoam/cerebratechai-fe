'use client';

import { useLocale } from 'next-intl';
import { OrganizationJsonLd, WebsiteJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from './JsonLd';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  canonical?: string;
}

export function SeoHead({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = '/',
  type = 'website',
  noindex = false,
  canonical
}: SeoHeadProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${basePath}${url}`;
  const canonicalUrl = canonical ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${canonical}` : fullUrl;

  const defaultTitle = isThai 
    ? 'Cerebratechai - เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง'
    : 'Cerebratechai - Turn Pain Points into Production-Ready AI Systems';
  
  const defaultDescription = isThai
    ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง เราสร้างโซลูชัน AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง'
    : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment.';

  const fullTitle = title ? `${title} | Cerebratechai` : defaultTitle;
  const fullDescription = description || defaultDescription;

  const defaultKeywords = isThai
    ? [
        'AI ประเทศไทย',
        'Machine Learning',
        'Computer Vision',
        'การพัฒนา AI',
        'ระบบ AI พร้อมใช้งาน',
        'AI consulting',
        'AI solutions',
        'Bangkok AI',
        'Thailand AI company'
      ]
    : [
        'AI solutions Thailand',
        'Machine Learning services',
        'Computer Vision development',
        'AI consulting Bangkok',
        'Production-ready AI',
        'Full-stack AI development',
        'Edge Computing',
        'AI system integration'
      ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="Cerebratechai Team" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Cerebratechai" />
      <meta property="og:locale" content={isThai ? 'th_TH' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${image}`} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content="@cerebratechai" />
      <meta name="twitter:creator" content="@cerebratechai" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0B1220" />
      <meta name="msapplication-TileColor" content="#0B1220" />
      <meta name="apple-mobile-web-app-title" content="Cerebratechai" />
      <meta name="application-name" content="Cerebratechai" />

      {/* Language and Region */}
      <meta name="language" content={locale} />
      <meta name="geo.region" content="TH" />
      <meta name="geo.placename" content="Bangkok" />
      <meta name="geo.position" content="13.7563;100.5018" />
      <meta name="ICBM" content="13.7563, 100.5018" />

      {/* Structured Data */}
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ServiceJsonLd />
      <LocalBusinessJsonLd />
    </>
  );
}
