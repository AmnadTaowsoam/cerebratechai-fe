'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import {
  ChevronRight,
  Home,
  Brain,
  Eye,
  Cpu,
  Wifi,
  Layers,
  BarChart,
  Microscope,
  Factory,
  Leaf,
  Heart,
  Building2,
  Package,
  FileText,
  DollarSign,
  Mail,
  Users,
  Shield,
  Briefcase,
  BookOpen,
  HelpCircle,
  Settings,
  FileQuestion,
  Sparkles,
  Newspaper,
  Workflow,
  UserPlus,
} from 'lucide-react';
import { useNonce } from '@/components/providers/nonce-provider';

// Icon name type for type safety
export type IconName =
  | 'home'
  | 'brain'
  | 'eye'
  | 'cpu'
  | 'wifi'
  | 'layers'
  | 'barChart'
  | 'microscope'
  | 'factory'
  | 'leaf'
  | 'heart'
  | 'building2'
  | 'package'
  | 'fileText'
  | 'dollarSign'
  | 'mail'
  | 'users'
  | 'shield'
  | 'briefcase'
  | 'bookOpen'
  | 'helpCircle'
  | 'settings'
  | 'fileQuestion'
  | 'sparkles'
  | 'newspaper'
  | 'workflow'
  | 'userPlus';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: IconName;
}

// Icon mapping
const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  home: Home,
  brain: Brain,
  eye: Eye,
  cpu: Cpu,
  wifi: Wifi,
  layers: Layers,
  barChart: BarChart,
  microscope: Microscope,
  factory: Factory,
  leaf: Leaf,
  heart: Heart,
  building2: Building2,
  package: Package,
  fileText: FileText,
  dollarSign: DollarSign,
  mail: Mail,
  users: Users,
  shield: Shield,
  briefcase: Briefcase,
  bookOpen: BookOpen,
  helpCircle: HelpCircle,
  settings: Settings,
  fileQuestion: FileQuestion,
  sparkles: Sparkles,
  newspaper: Newspaper,
  workflow: Workflow,
  userPlus: UserPlus, // Alternative to Handshake
};

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
      ...(item.href && {
        item: `${origin}${item.href.startsWith('/') ? '' : '/'}${item.href}`,
      }),
    })),
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
          className="flex items-center gap-1 hover:text-primary transition-colors"
          aria-label={isThai ? 'หน้าแรก' : 'Home'}
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const IconComponent = item.icon ? iconMap[item.icon] : null;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 text-text-muted/50" />
              {item.href ? (
                <Link
                  href={item.href as any}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className="flex items-center gap-1 text-text font-medium"
                  aria-current="page"
                >
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  <span>{item.label}</span>
                </span>
              )}
            </div>
          );
        })}
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

  // Icon name mapping for solutions
  const solutionIconNames: Record<string, IconName> = {
    ml: 'cpu',
    cv: 'eye',
    llm: 'brain',
    aiot: 'wifi',
    platform: 'layers',
    analytics: 'barChart',
  };

  // Icon name mapping for products
  const productIconNames: Record<string, IconName> = {
    chartsentinel: 'barChart',
    cerebraforge: 'layers',
    vetpath: 'microscope',
    phitiai: 'sparkles',
    sookwai: 'heart',
    pluktunraka: 'leaf',
    smartfarm: 'factory',
  };

  // Icon name mapping for industries
  const industryIconNames: Record<string, IconName> = {
    manufacturing: 'factory',
    healthcare: 'heart',
    logistics: 'package',
    enterprise: 'building2',
    agriculture: 'leaf',
  };

  if (section === 'services') {
    breadcrumbs.push({
      label: isThai ? 'บริการ' : 'Services',
      href: `${basePath}/services`,
      icon: 'brain',
    });
    if (slug) {
      const serviceNames: Record<string, { th: string; en: string }> = {
        consulting: { th: 'AI Consulting', en: 'AI Consulting' },
        development: { th: 'AI Development', en: 'AI Development' },
        deployment: { th: 'AI Deployment', en: 'AI Deployment' },
      };
      if (serviceNames[slug]) {
        breadcrumbs.push({
          label: isThai ? serviceNames[slug].th : serviceNames[slug].en,
          icon:
            slug === 'consulting'
              ? 'brain'
              : slug === 'development'
                ? 'cpu'
                : 'workflow',
        });
      }
    }
    return breadcrumbs;
  }

  if (section === 'solutions') {
    breadcrumbs.push({
      label: isThai ? 'โซลูชัน' : 'Solutions',
      href: `${basePath}/solutions`,
      icon: 'brain',
    });
    if (slug && solutionNames[slug]) {
      breadcrumbs.push({
        label: isThai ? solutionNames[slug].th : solutionNames[slug].en,
        icon: solutionIconNames[slug],
      });
    }
    return breadcrumbs;
  }

  if (section === 'products') {
    breadcrumbs.push({
      label: isThai ? 'สินค้าของเรา' : 'Products',
      href: `${basePath}/products`,
      icon: 'package',
    });
    if (slug) {
      const productName = slug.charAt(0).toUpperCase() + slug.slice(1);
      breadcrumbs.push({
        label: productName,
        icon: productIconNames[slug],
      });
    }
    return breadcrumbs;
  }

  if (section === 'packages') {
    breadcrumbs.push({
      label: isThai ? 'แพ็กเกจ' : 'Packages',
      href: `${basePath}/packages`,
      icon: 'package',
    });
    if (slug && packageNames[slug])
      breadcrumbs.push({
        label: isThai ? packageNames[slug].th : packageNames[slug].en,
      });
    return breadcrumbs;
  }

  if (section === 'cases') {
    breadcrumbs.push({
      label: isThai ? 'กรณีศึกษา' : 'Case Studies',
      href: `${basePath}/cases`,
      icon: 'fileText',
    });
    if (slug)
      breadcrumbs.push({
        label: isThai ? 'รายละเอียดกรณีศึกษา' : 'Case Details',
      });
    return breadcrumbs;
  }

  if (section === 'pricing') {
    breadcrumbs.push({
      label: isThai ? 'ราคา' : 'Pricing',
      icon: 'dollarSign',
    });
    return breadcrumbs;
  }

  if (section === 'contact') {
    breadcrumbs.push({ label: isThai ? 'ติดต่อ' : 'Contact', icon: 'mail' });
    return breadcrumbs;
  }

  if (section === 'about') {
    breadcrumbs.push({
      label: isThai ? 'เกี่ยวกับเรา' : 'About Us',
      icon: 'users',
    });
    return breadcrumbs;
  }

  if (section === 'legal') {
    breadcrumbs.push({
      label: isThai ? 'กฎหมาย' : 'Legal',
      href: `${basePath}/legal`,
      icon: 'fileQuestion',
    });
    if (slug && legalNames[slug])
      breadcrumbs.push({
        label: isThai ? legalNames[slug].th : legalNames[slug].en,
      });
    return breadcrumbs;
  }

  if (section === 'industries') {
    const industryNames: Record<string, { th: string; en: string }> = {
      manufacturing: { th: 'การผลิต', en: 'Manufacturing' },
      healthcare: { th: 'สุขภาพ', en: 'Healthcare' },
      logistics: { th: 'โลจิสติกส์', en: 'Logistics' },
      enterprise: { th: 'องค์กร', en: 'Enterprise' },
      agriculture: { th: 'เกษตรกรรม', en: 'Agriculture' },
    };

    breadcrumbs.push({
      label: isThai ? 'อุตสาหกรรม' : 'Industries',
      href: `${basePath}/industries`,
      icon: 'factory',
    });
    if (slug && industryNames[slug]) {
      breadcrumbs.push({
        label: isThai ? industryNames[slug].th : industryNames[slug].en,
        icon: industryIconNames[slug],
      });
    }
    return breadcrumbs;
  }

  if (section === 'resources') {
    breadcrumbs.push({
      label: isThai ? 'แหล่งความรู้' : 'Resources',
      href: `${basePath}/resources`,
      icon: 'bookOpen',
    });
    if (slug) breadcrumbs.push({ label: isThai ? 'รายละเอียด' : 'Details' });
    return breadcrumbs;
  }

  if (section === 'blog') {
    breadcrumbs.push({
      label: isThai ? 'บล็อก' : 'Blog',
      href: `${basePath}/blog`,
      icon: 'fileText',
    });
    if (slug) breadcrumbs.push({ label: isThai ? 'บทความ' : 'Article' });
    return breadcrumbs;
  }

  if (section === 'support') {
    breadcrumbs.push({
      label: isThai ? 'ซัพพอร์ต' : 'Support',
      icon: 'helpCircle',
    });
    return breadcrumbs;
  }

  if (section === 'how-we-work') {
    breadcrumbs.push({
      label: isThai ? 'วิธีการทำงาน' : 'How We Work',
      icon: 'settings',
    });
    return breadcrumbs;
  }

  if (section === 'trust') {
    breadcrumbs.push({
      label: isThai ? 'ความปลอดภัยและความน่าเชื่อถือ' : 'Trust & Security',
      icon: 'shield',
    });
    return breadcrumbs;
  }

  if (section === 'careers') {
    breadcrumbs.push({
      label: isThai ? 'ร่วมงานกับเรา' : 'Careers',
      icon: 'briefcase',
    });
    return breadcrumbs;
  }

  if (section === 'partners') {
    breadcrumbs.push({
      label: isThai ? 'พาร์ทเนอร์' : 'Partners',
      icon: 'userPlus',
    });
    return breadcrumbs;
  }

  if (section === 'faq') {
    breadcrumbs.push({
      label: isThai ? 'คำถามที่พบบ่อย' : 'FAQ',
      icon: 'helpCircle',
    });
    return breadcrumbs;
  }

  if (section === 'news') {
    breadcrumbs.push({
      label: isThai ? 'ข่าว' : 'News',
      href: `${basePath}/news`,
      icon: 'newspaper',
    });
    return breadcrumbs;
  }

  // Handle dashboard and other pages
  if (section === 'dashboard') {
    breadcrumbs.push({
      label: isThai ? 'แดชบอร์ด' : 'Dashboard',
      icon: 'barChart',
    });
    return breadcrumbs;
  }

  if (section === 'register') {
    breadcrumbs.push({
      label: isThai ? 'สมัครสมาชิก' : 'Register',
      icon: 'users',
    });
    return breadcrumbs;
  }

  if (section === 'login') {
    breadcrumbs.push({
      label: isThai ? 'เข้าสู่ระบบ' : 'Login',
      icon: 'shield',
    });
    return breadcrumbs;
  }

  return breadcrumbs;
}
