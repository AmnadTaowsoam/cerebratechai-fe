'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { useNonce } from '@/components/providers/nonce-provider';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const locale = useLocale();
  const basePath = `/${locale}`;
  const nonce = useNonce();

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${item.href}` })
    }))
  };

  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-1 text-sm text-text-muted ${className}`}
      >
        <Link 
          href={basePath as any} 
          className="flex items-center hover:text-primary transition-colors"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 text-text-muted/50" />
            {item.href ? (
              <Link 
                href={item.href as any}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

// Predefined breadcrumb generators for common pages
export function generateBreadcrumbs(pathname: string, locale: string) {
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Remove locale from path segments
  if (pathSegments[0] === locale) {
    pathSegments.shift();
  }

  // Generate breadcrumbs based on path
  if (pathSegments.length === 0) {
    return []; // Home page, no breadcrumbs needed
  }

  // Solutions pages
  if (pathSegments[0] === 'solutions') {
    breadcrumbs.push({
      label: isThai ? 'โซลูชัน' : 'Solutions',
      href: `${basePath}/solutions`
    });
    
    if (pathSegments[1]) {
      const solutionNames: Record<string, { th: string; en: string }> = {
        'ml': { th: 'Machine Learning', en: 'Machine Learning' },
        'cv': { th: 'Computer Vision', en: 'Computer Vision' },
        'llm': { th: 'LLM & RAG', en: 'LLM & RAG' },
        'aiot': { th: 'AIoT', en: 'AIoT' },
        'platform': { th: 'Platform', en: 'Platform' },
        'analytics': { th: 'Analytics', en: 'Analytics' },
      };
      
      const solutionName = solutionNames[pathSegments[1]];
      if (solutionName) {
        breadcrumbs.push({
          label: isThai ? solutionName.th : solutionName.en
        });
      }
    }
  }
  
  // Packages pages
  else if (pathSegments[0] === 'packages') {
    breadcrumbs.push({
      label: isThai ? 'แพ็กเกจ' : 'Packages',
      href: `${basePath}/packages`
    });
    
    if (pathSegments[1]) {
      const packageNames: Record<string, { th: string; en: string }> = {
        'kickstart': { th: 'Kickstart', en: 'Kickstart' },
        'poc-lab': { th: 'POC Lab', en: 'POC Lab' },
        'pilot-launch': { th: 'Pilot Launch', en: 'Pilot Launch' },
        'production-scale': { th: 'Production Scale', en: 'Production Scale' },
      };
      
      const packageName = packageNames[pathSegments[1]];
      if (packageName) {
        breadcrumbs.push({
          label: isThai ? packageName.th : packageName.en
        });
      }
    }
  }
  
  // Cases pages
  else if (pathSegments[0] === 'cases') {
    breadcrumbs.push({
      label: isThai ? 'เคสศึกษา' : 'Case Studies',
      href: `${basePath}/cases`
    });
    
    if (pathSegments[1]) {
      breadcrumbs.push({
        label: isThai ? 'รายละเอียดเคส' : 'Case Details'
      });
    }
  }
  
  // Pricing page
  else if (pathSegments[0] === 'pricing') {
    breadcrumbs.push({
      label: isThai ? 'ราคา' : 'Pricing'
    });
  }
  
  // Contact page
  else if (pathSegments[0] === 'contact') {
    breadcrumbs.push({
      label: isThai ? 'ติดต่อ' : 'Contact'
    });
  }
  
  // About page
  else if (pathSegments[0] === 'about') {
    breadcrumbs.push({
      label: isThai ? 'เกี่ยวกับเรา' : 'About Us'
    });
  }
  
  // Legal pages
  else if (pathSegments[0] === 'legal') {
    breadcrumbs.push({
      label: isThai ? 'กฎหมาย' : 'Legal',
      href: `${basePath}/legal`
    });
    
    if (pathSegments[1]) {
      const legalNames: Record<string, { th: string; en: string }> = {
        'privacy': { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy Policy' },
        'terms': { th: 'เงื่อนไขการใช้งาน', en: 'Terms of Service' },
        'cookies': { th: 'นโยบายคุกกี้', en: 'Cookie Policy' },
        'refund': { th: 'นโยบายการคืนเงิน', en: 'Refund Policy' },
        'disclaimer': { th: 'ข้อจำกัดความรับผิดชอบ', en: 'Disclaimer' },
        'pdpa': { th: 'PDPA', en: 'PDPA' },
      };
      
      const legalName = legalNames[pathSegments[1]];
      if (legalName) {
        breadcrumbs.push({
          label: isThai ? legalName.th : legalName.en
        });
      }
    }
  }

  return breadcrumbs;
}
