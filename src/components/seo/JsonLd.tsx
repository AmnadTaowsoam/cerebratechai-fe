'use client';

import { useLocale } from 'next-intl';
import { useNonce } from '@/components/providers/nonce-provider';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  const nonce = useNonce();

  return (
    <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Organization Schema
export function OrganizationJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CerebraTechAI',
    alternateName: 'CerebraTechAI AI Studio',
    description: isThai
      ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง เราสร้างระบบ AI และ full-stack จาก Edge ถึง Cloud พร้อม deploy และดูแลต่อได้'
      : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    url: SITE_URL,
    logo: `${SITE_URL}/cerebratechai_logo.png`,
    image: `${SITE_URL}/cerebratechai_logo.png`,
    foundingDate: '2024',
    founder: { '@type': 'Person', name: 'CerebraTechAI Team' },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
      addressRegion: 'Bangkok',
      addressCountryName: isThai ? 'ประเทศไทย' : 'Thailand',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-85-662-1113',
      contactType: 'customer service',
      availableLanguage: ['English', 'Thai'],
      areaServed: 'TH',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
        timeZone: 'Asia/Bangkok',
      },
    },
    sameAs: [
      'https://www.linkedin.com/company/cerebratechai',
      'https://www.facebook.com/profile.php?id=61573397803179',
      'https://github.com/AmnadTaowsoam',
      'https://www.youtube.com/@cerebratechai',
    ],
    serviceArea: { '@type': 'Country', name: 'Thailand' },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Edge Computing',
      'Cloud Computing',
      'Full-Stack Development',
      'AI Consulting',
      'AI System Integration',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'บริการ AI / Machine Learning' : 'AI and Machine Learning Services',
          description: isThai ? 'พัฒนาและนำระบบ AI ไปใช้งานจริง' : 'Development and deployment of production-ready AI systems',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'ที่ปรึกษา AI' : 'AI Consulting',
          description: isThai ? 'ให้คำปรึกษาด้านกลยุทธ์และการนำ AI ไปใช้' : 'AI strategy and implementation consulting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'พัฒนา Full-stack' : 'Full-Stack Development',
          description: isThai ? 'พัฒนาระบบตั้งแต่ Edge ถึง Cloud' : 'End-to-end system development from Edge to Cloud',
        },
      },
    ],
  };

  return <JsonLd data={organizationData} />;
}

// Website Schema
export function WebsiteJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CerebraTechAI',
    alternateName: 'CerebraTechAI AI Studio',
    url: SITE_URL,
    description: isThai ? 'Boutique AI Studio ในกรุงเทพฯ สำหรับโซลูชัน AI พร้อมใช้งานจริง' : 'Transform your pain points into production-ready AI systems',
    inLanguage: [locale],
    publisher: {
      '@type': 'Organization',
      name: 'CerebraTechAI',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/cerebratechai_logo.png` },
    },
  };

  return <JsonLd data={websiteData} />;
}

// Service Schema (site-level summary)
export function ServiceJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isThai ? 'บริการ AI และ Full-stack' : 'AI & Full-Stack Solutions',
    description: isThai
      ? 'พัฒนาและนำระบบ AI ไปใช้งานจริง พร้อม guardrails และ playbooks'
      : 'Development and deployment of production-ready AI systems with guardrails and playbooks',
    provider: { '@type': 'Organization', name: 'CerebraTechAI', url: SITE_URL },
    serviceType: 'AI & Full-Stack Solutions',
    areaServed: { '@type': 'Country', name: 'Thailand' },
    availableLanguage: ['English', 'Thai'],
    offers: {
      '@type': 'Offer',
      description: isThai ? 'แพ็กเกจ AI และทางเลือกด้านราคา' : 'Various AI packages and pricing options',
      priceRange: 'THB 95,000-2,500,000',
      priceCurrency: 'THB',
    },
    category: 'Technology Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isThai ? 'แพ็กเกจ AI' : 'AI Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kickstart',
            description: isThai ? 'เฟสเริ่มต้นเพื่อกำหนดโจทย์และประเมินความเป็นไปได้' : 'Entry-level package for AI exploration',
          },
          price: '95000',
          priceCurrency: 'THB',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'POC Lab',
            description: isThai ? 'พัฒนา POC พร้อมประเมินผลและวางแผนการนำไปใช้' : 'POC development package',
          },
          price: '420000',
          priceCurrency: 'THB',
        },
      ],
    },
  };

  return <JsonLd data={serviceData} />;
}

// LocalBusiness Schema
export function LocalBusinessJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#localbusiness`,
    name: 'CerebraTechAI',
    description: isThai ? 'Boutique AI Studio ในกรุงเทพฯ' : 'Boutique AI Studio in Bangkok',
    url: SITE_URL,
    telephone: '+66-85-662-1113',
    email: 'hello@cerebratechai.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
      addressRegion: 'Bangkok',
      addressCountryName: isThai ? 'ประเทศไทย' : 'Thailand',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '13.7563', longitude: '100.5018' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
      timeZone: 'Asia/Bangkok',
    },
    priceRange: 'THB',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'THB, USD',
    areaServed: { '@type': 'Country', name: 'Thailand' },
  };

  return <JsonLd data={localBusinessData} />;
}
