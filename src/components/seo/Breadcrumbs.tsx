'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { useNonce } from '@/components/providers/nonce-provider';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const locale = useLocale();
  const isThai = locale.startsWith('th');
  const basePath = `/${locale}`;
  const nonce = useNonce();

  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${origin}${item.href.startsWith('/') ? '' : '/'}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <nav aria-label="Breadcrumb" className={`flex items-center space-x-1 text-sm text-text-muted ${className}`}>
        <Link
          href={basePath as any}
          className="flex items-center hover:text-primary transition-colors"
          aria-label={isThai ? 'หน้าแรก' : 'Home'}
        >
          <Home className="h-4 w-4" />
        </Link>

        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 text-text-muted/50" />
            {item.href ? (
              <Link href={item.href as any} className="hover:text-primary transition-colors">
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

  // Remove locale from path segments (e.g. /th/solutions -> ["solutions"])
  if (pathSegments[0] === locale) pathSegments.shift();

  if (pathSegments.length === 0) return [];

  const solutionNames: Record<string, { th: string; en: string }> = {
    ml: { th: 'แมชชีนเลิร์นนิง', en: 'Machine Learning' },
    cv: { th: 'คอมพิวเตอร์วิชัน', en: 'Computer Vision' },
    llm: { th: 'LLM & RAG', en: 'LLM & RAG' },
    aiot: { th: 'AIoT', en: 'AIoT' },
    platform: { th: 'แพลตฟอร์ม', en: 'Platform' },
    analytics: { th: 'อะนาลิติกส์', en: 'Analytics' },
  };

  const packageNames: Record<string, { th: string; en: string }> = {
    kickstart: { th: 'Kickstart', en: 'Kickstart' },
    'poc-lab': { th: 'POC Lab', en: 'POC Lab' },
    'pilot-launch': { th: 'Pilot Launch', en: 'Pilot Launch' },
    'production-scale': { th: 'Production Scale', en: 'Production Scale' },
  };

  const legalNames: Record<string, { th: string; en: string }> = {
    privacy: { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy Policy' },
    terms: { th: 'ข้อกำหนดการให้บริการ', en: 'Terms of Service' },
    cookies: { th: 'นโยบายคุกกี้', en: 'Cookie Policy' },
    refund: { th: 'นโยบายการคืนเงิน', en: 'Refund Policy' },
    disclaimer: { th: 'ข้อสงวนสิทธิ์', en: 'Disclaimer' },
    pdpa: { th: 'PDPA', en: 'PDPA' },
  };

  const [section, slug] = pathSegments;

  if (section === 'solutions') {
    breadcrumbs.push({ label: isThai ? 'โซลูชัน' : 'Solutions', href: `${basePath}/solutions` });
    if (slug && solutionNames[slug]) breadcrumbs.push({ label: isThai ? solutionNames[slug].th : solutionNames[slug].en });
    return breadcrumbs;
  }

  if (section === 'packages') {
    breadcrumbs.push({ label: isThai ? 'แพ็กเกจ' : 'Packages', href: `${basePath}/packages` });
    if (slug && packageNames[slug]) breadcrumbs.push({ label: isThai ? packageNames[slug].th : packageNames[slug].en });
    return breadcrumbs;
  }

  if (section === 'cases') {
    breadcrumbs.push({ label: isThai ? 'กรณีศึกษา' : 'Case Studies', href: `${basePath}/cases` });
    if (slug) breadcrumbs.push({ label: isThai ? 'รายละเอียดกรณีศึกษา' : 'Case Details' });
    return breadcrumbs;
  }

  if (section === 'pricing') {
    breadcrumbs.push({ label: isThai ? 'ราคา' : 'Pricing' });
    return breadcrumbs;
  }

  if (section === 'contact') {
    breadcrumbs.push({ label: isThai ? 'ติดต่อ' : 'Contact' });
    return breadcrumbs;
  }

  if (section === 'about') {
    breadcrumbs.push({ label: isThai ? 'เกี่ยวกับเรา' : 'About Us' });
    return breadcrumbs;
  }

  if (section === 'legal') {
    breadcrumbs.push({ label: isThai ? 'กฎหมาย' : 'Legal', href: `${basePath}/legal` });
    if (slug && legalNames[slug]) breadcrumbs.push({ label: isThai ? legalNames[slug].th : legalNames[slug].en });
    return breadcrumbs;
  }

  if (section === 'industries') {
    const industryNames: Record<string, { th: string; en: string }> = {
      manufacturing: { th: 'การผลิต', en: 'Manufacturing' },
      healthcare: { th: 'สุขภาพ', en: 'Healthcare' },
      logistics: { th: 'โลจิสติกส์', en: 'Logistics' },
      enterprise: { th: 'องค์กร', en: 'Enterprise' },
    };

    breadcrumbs.push({ label: isThai ? 'อุตสาหกรรม' : 'Industries', href: `${basePath}/industries` });
    if (slug && industryNames[slug]) breadcrumbs.push({ label: isThai ? industryNames[slug].th : industryNames[slug].en });
    return breadcrumbs;
  }

  if (section === 'resources') {
    breadcrumbs.push({ label: isThai ? 'แหล่งความรู้' : 'Resources', href: `${basePath}/resources` });
    if (slug) breadcrumbs.push({ label: isThai ? 'รายละเอียด' : 'Details' });
    return breadcrumbs;
  }

  if (section === 'blog') {
    breadcrumbs.push({ label: isThai ? 'บล็อก' : 'Blog', href: `${basePath}/blog` });
    if (slug) breadcrumbs.push({ label: isThai ? 'บทความ' : 'Article' });
    return breadcrumbs;
  }

  if (section === 'support') {
    breadcrumbs.push({ label: isThai ? 'ซัพพอร์ต' : 'Support' });
    return breadcrumbs;
  }

  if (section === 'how-we-work') {
    breadcrumbs.push({ label: isThai ? 'วิธีการทำงาน' : 'How We Work' });
    return breadcrumbs;
  }

  if (section === 'trust') {
    breadcrumbs.push({ label: isThai ? 'ความปลอดภัยและความน่าเชื่อถือ' : 'Trust & Security' });
    return breadcrumbs;
  }

  if (section === 'careers') {
    breadcrumbs.push({ label: isThai ? 'ร่วมงานกับเรา' : 'Careers' });
    return breadcrumbs;
  }

  if (section === 'partners') {
    breadcrumbs.push({ label: isThai ? 'พาร์ทเนอร์' : 'Partners' });
    return breadcrumbs;
  }

  return breadcrumbs;
}
