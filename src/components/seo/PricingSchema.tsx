'use client';

import { useLocale } from 'next-intl';
import { JsonLd } from './JsonLd';

export function PricingSchema() {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const pricingData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: isThai ? 'แพ็กเกจ AI Solutions' : 'AI Solutions Packages',
    description: isThai 
      ? 'แพ็กเกจโซลูชัน AI หลากหลายราคาสำหรับธุรกิจทุกขนาด'
      : 'Various AI solution packages for businesses of all sizes',
    brand: {
      '@type': 'Brand',
      name: 'Cerebratechai'
    },
    offers: [
      {
        '@type': 'Offer',
        name: isThai ? 'Kickstart Package' : 'Kickstart Package',
        description: isThai 
          ? 'แพ็กเกจเริ่มต้นสำหรับการสำรวจ AI'
          : 'Entry-level package for AI exploration',
        price: '95000',
        priceCurrency: 'THB',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        category: 'AI Consulting',
        seller: {
          '@type': 'Organization',
          name: 'Cerebratechai',
          url: baseUrl
        }
      },
      {
        '@type': 'Offer',
        name: isThai ? 'POC Lab Package' : 'POC Lab Package',
        description: isThai 
          ? 'แพ็กเกจพัฒนาระบบ POC'
          : 'POC development package',
        price: '420000',
        priceCurrency: 'THB',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        category: 'AI Development',
        seller: {
          '@type': 'Organization',
          name: 'Cerebratechai',
          url: baseUrl
        }
      },
      {
        '@type': 'Offer',
        name: isThai ? 'Pilot Launch Package' : 'Pilot Launch Package',
        description: isThai 
          ? 'แพ็กเกจปล่อยใช้งานจริงแบบจำกัด'
          : 'Limited production deployment package',
        price: '1200000',
        priceCurrency: 'THB',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        category: 'AI Production',
        seller: {
          '@type': 'Organization',
          name: 'Cerebratechai',
          url: baseUrl
        }
      },
      {
        '@type': 'Offer',
        name: isThai ? 'Production Scale Package' : 'Production Scale Package',
        description: isThai 
          ? 'แพ็กเกจระบบ AI ขนาดใหญ่'
          : 'Large-scale AI system package',
        price: '2500000',
        priceCurrency: 'THB',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString().split('T')[0],
        category: 'AI Enterprise',
        seller: {
          '@type': 'Organization',
          name: 'Cerebratechai',
          url: baseUrl
        }
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '24',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return <JsonLd data={pricingData} />;
}

export function ServiceSchema({ 
  serviceName, 
  description, 
  price 
}: { 
  serviceName: string; 
  description: string; 
  price?: number; 
}) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Cerebratechai',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'TH',
        addressLocality: 'Bangkok'
      }
    },
    serviceType: 'AI & Machine Learning Services',
    areaServed: {
      '@type': 'Country',
      name: 'Thailand'
    },
    availableLanguage: ['English', 'Thai'],
    ...(price && {
      offers: {
        '@type': 'Offer',
        price: price.toString(),
        priceCurrency: 'THB',
        availability: 'https://schema.org/InStock'
      }
    })
  };

  return <JsonLd data={serviceData} />;
}

export function FAQSchema({ 
  faqs 
}: { 
  faqs: Array<{ question: string; answer: string }> 
}) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <JsonLd data={faqData} />;
}
