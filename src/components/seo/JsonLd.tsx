'use client';

import { useLocale } from 'next-intl';

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export function OrganizationJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cerebratechai',
    alternateName: 'Cerebratechai AI Studio',
    description: isThai 
      ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง เราสร้างโซลูชัน AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง'
      : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cerebratechai_logo.png`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cerebratechai_logo.png`,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Cerebratechai Team'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
      addressRegion: 'Bangkok',
      addressCountryName: isThai ? 'ประเทศไทย' : 'Thailand'
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
        timeZone: 'Asia/Bangkok'
      }
    },
    sameAs: [
      'https://www.linkedin.com/company/cerebratechai',
      'https://www.facebook.com/profile.php?id=61573397803179',
      'https://github.com/AmnadTaowsoam',
      'https://www.youtube.com/@cerebratechai'
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'Thailand'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Edge Computing',
      'Cloud Computing',
      'Full-Stack Development',
      'AI Consulting',
      'AI System Integration'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'บริการ AI และ Machine Learning' : 'AI and Machine Learning Services',
          description: isThai ? 'การพัฒนาและติดตั้งระบบ AI ที่พร้อมใช้งานจริง' : 'Development and deployment of production-ready AI systems'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'การให้คำปรึกษา AI' : 'AI Consulting',
          description: isThai ? 'การให้คำปรึกษาและวางแผนระบบ AI' : 'AI strategy and implementation consulting'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: isThai ? 'การพัฒนาระบบ Full-Stack' : 'Full-Stack Development',
          description: isThai ? 'การพัฒนาระบบครบวงจรจาก Edge ถึง Cloud' : 'End-to-end system development from Edge to Cloud'
        }
      }
    ]
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
    name: 'Cerebratechai',
    alternateName: 'Cerebratechai AI Studio',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    description: isThai 
      ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง'
      : 'Transform your pain points into production-ready AI systems',
    inLanguage: [locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cerebratechai',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cerebratechai_logo.png`
      }
    }
  };

  return <JsonLd data={websiteData} />;
}

// Service Schema
export function ServiceJsonLd() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isThai ? 'บริการ AI และ Machine Learning' : 'AI and Machine Learning Services',
    description: isThai 
      ? 'การพัฒนาและติดตั้งระบบ AI ที่พร้อมใช้งานจริง พร้อม guardrails และ playbooks'
      : 'Development and deployment of production-ready AI systems with guardrails and playbooks',
    provider: {
      '@type': 'Organization',
      name: 'Cerebratechai',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    },
    serviceType: 'AI & Full-Stack Solutions',
    areaServed: {
      '@type': 'Country',
      name: 'Thailand'
    },
    availableLanguage: ['English', 'Thai'],
    offers: {
      '@type': 'Offer',
      description: isThai ? 'แพ็กเกจ AI หลากหลายราคา' : 'Various AI packages and pricing options',
      priceRange: '฿95,000 - ฿2,500,000',
      priceCurrency: 'THB'
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
            name: isThai ? 'Kickstart Package' : 'Kickstart Package',
            description: isThai ? 'แพ็กเกจเริ่มต้นสำหรับการสำรวจ AI' : 'Entry-level package for AI exploration'
          },
          price: '95000',
          priceCurrency: 'THB'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isThai ? 'POC Lab Package' : 'POC Lab Package',
            description: isThai ? 'แพ็กเกจพัฒนาระบบ POC' : 'POC development package'
          },
          price: '420000',
          priceCurrency: 'THB'
        }
      ]
    }
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
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}#localbusiness`,
    name: 'Cerebratechai',
    description: isThai 
      ? 'สตูดิโอ AI แบบบูติกในกรุงเทพฯ'
      : 'Boutique AI Studio in Bangkok',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    telephone: '+66-85-662-1113',
    email: 'hello@cerebratechai.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
      addressRegion: 'Bangkok',
      addressCountryName: isThai ? 'ประเทศไทย' : 'Thailand'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.7563',
      longitude: '100.5018'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
      timeZone: 'Asia/Bangkok'
    },
    priceRange: '฿฿',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'THB, USD',
    areaServed: {
      '@type': 'Country',
      name: 'Thailand'
    }
  };

  return <JsonLd data={localBusinessData} />;
}
