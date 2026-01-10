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
  image = '/cerebratechai_logo.png',
  url = '/',
  type = 'website',
  noindex = false,
  canonical,
}: SeoHeadProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;

  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const fullUrl = `${origin}${basePath}${url}`;
  const canonicalUrl = canonical ? `${origin}${canonical}` : fullUrl;

  const defaultTitle = isThai
    ? 'CerebraTechAI - เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง'
    : 'CerebraTechAI - Turn Pain Points into Production-Ready AI Systems';

  const defaultDescription = isThai
    ? 'เราสร้างระบบ AI และ full-stack จาก Edge ถึง Cloud พร้อม deploy ใช้งานจริง มี guardrails และ playbooks ครบชุด'
    : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment.';

  const fullTitle = title ? `${title} | CerebraTechAI` : defaultTitle;
  const fullDescription = description || defaultDescription;

  const defaultKeywords = isThai
    ? [
        'โซลูชัน AI',
        'แมชชีนเลิร์นนิง',
        'คอมพิวเตอร์วิชัน',
        'LLM',
        'RAG',
        'AIoT',
        'ที่ปรึกษา AI',
        'พัฒนา AI ใช้งานจริง',
        'บริษัท AI กรุงเทพ',
      ]
    : [
        'AI solutions Thailand',
        'Machine Learning services',
        'Computer Vision development',
        'AI consulting Bangkok',
        'Production-ready AI',
        'Full-stack AI development',
        'Edge Computing',
        'AI system integration',
      ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="CerebraTechAI Team" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${origin}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="CerebraTechAI" />
      <meta property="og:locale" content={isThai ? 'th_TH' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${origin}${image}`} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content="@cerebratechai" />
      <meta name="twitter:creator" content="@cerebratechai" />

      {/* Additional */}
      <meta name="theme-color" content="#0B1220" />
      <meta name="msapplication-TileColor" content="#0B1220" />
      <meta name="apple-mobile-web-app-title" content="CerebraTechAI" />
      <meta name="application-name" content="CerebraTechAI" />

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
