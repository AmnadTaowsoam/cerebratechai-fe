'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Linkedin, Github, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const basePath = `/${locale}`;

  const quickLinks = [
    { 
      name: locale.startsWith('th') ? 'โซลูชัน' : 'Solutions', 
      href: `${basePath}/solutions`,
      desc: locale.startsWith('th') ? 'บริการ AI ที่เรามี' : 'Our AI services'
    },
    { 
      name: locale.startsWith('th') ? 'แพ็กเกจ' : 'Packages', 
      href: `${basePath}/packages`,
      desc: locale.startsWith('th') ? 'แพ็กเกจราคา' : 'Pricing packages'
    },
    { 
      name: locale.startsWith('th') ? 'เคสศึกษา' : 'Case Studies', 
      href: `${basePath}/cases`,
      desc: locale.startsWith('th') ? 'ผลงานจริง' : 'Real projects'
    },
    { 
      name: locale.startsWith('th') ? 'ติดต่อ' : 'Contact', 
      href: `${basePath}/contact`,
      desc: locale.startsWith('th') ? 'พูดคุยกับเรา' : 'Get in touch'
    },
  ];

  const legalLinks = [
    { 
      name: locale.startsWith('th') ? 'นโยบายความเป็นส่วนตัว' : 'Privacy Policy', 
      href: `${basePath}/legal/privacy` 
    },
    { 
      name: locale.startsWith('th') ? 'เงื่อนไขการใช้งาน' : 'Terms of Service', 
      href: `${basePath}/legal/terms` 
    },
    { 
      name: locale.startsWith('th') ? 'นโยบายคุกกี้' : 'Cookie Policy', 
      href: `${basePath}/legal/cookies` 
    },
    { 
      name: locale.startsWith('th') ? 'นโยบายการคืนเงิน' : 'Refund Policy', 
      href: `${basePath}/legal/refund` 
    },
    { 
      name: locale.startsWith('th') ? 'ข้อจำกัดความรับผิดชอบ' : 'Disclaimer', 
      href: `${basePath}/legal/disclaimer` 
    },
    { 
      name: 'PDPA', 
      href: `${basePath}/legal/pdpa` 
    },
  ];

  const contactDetails = [
    {
      label: locale.startsWith('th') ? 'อีเมล' : 'Email',
      value: 'hello@cerebratechai.com',
      href: 'mailto:hello@cerebratechai.com',
    },
    {
      label: locale.startsWith('th') ? 'โทรศัพท์' : 'Phone',
      value: '085-662-1113',
      href: 'tel:+66856621113',
    },
    {
      label: locale.startsWith('th') ? 'เวลาทำการ' : 'Business Hours',
      value: locale.startsWith('th') ? 'จ-ศ 9:00-18:00 (GMT+7)' : 'Mon-Fri 9:00-18:00 (GMT+7)',
    },
  ];

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cerebratechai', icon: Linkedin },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573397803179', icon: Facebook },
    { label: 'GitHub', href: 'https://github.com/AmnadTaowsoam', icon: Github },
    { label: 'YouTube', href: 'https://www.youtube.com/@cerebratechai', icon: Youtube },
  ];

  return (
    <footer className="relative border-t border-hairline/50 bg-gradient-to-b from-surface via-surface to-bg">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-16 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand Section - Larger on desktop */}
          <div className="lg:col-span-5 space-y-6">
            <Link href={basePath as any} className="inline-flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/cerebratechai_logo.png"
                  alt="Cerebratechai logo"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-text tracking-tight">Cerebratechai</span>
            </Link>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-text-muted max-w-md">
                {locale.startsWith('th') 
                  ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง เราสร้างโซลูชัน AI และ full-stack จาก Edge ถึง Cloud ที่พร้อมปล่อยใช้งานจริง'
                  : 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.'
                }
              </p>
              
              <div className="rounded-xl border border-hairline/50 bg-gradient-to-br from-surface/80 to-surface/40 p-6 backdrop-blur-sm shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-lg font-bold text-text tracking-tight">Cerebratechai</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-text/90">
                      {locale.startsWith('th') ? 'สตูดิโอ AI แบบบูติก' : 'Boutique AI Studio'}
                    </p>
                    <p className="text-xs text-text-muted flex items-center">
                      <svg className="w-3 h-3 mr-1.5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {locale.startsWith('th') ? 'กรุงเทพฯ, ประเทศไทย' : 'Bangkok, Thailand'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <LocaleSwitcher />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text/80">
                {locale.startsWith('th') ? 'ลิงก์ด่วน' : 'QUICK LINKS'}
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href as any}
                      className="group block transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="flex items-center text-sm font-medium text-text transition-colors group-hover:text-primary">
                        <span className="h-1 w-1 rounded-full bg-primary/40 mr-3 transition-all group-hover:bg-primary group-hover:w-2" />
                        {link.name}
                      </div>
                      <div className="text-xs text-text-muted ml-4 mt-1 group-hover:text-text-muted/80">
                        {link.desc}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text/80">
                {locale.startsWith('th') ? 'กฎหมาย' : 'LEGAL'}
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href as any}
                      className="group inline-flex items-center text-sm text-text-muted transition-all duration-200 hover:text-primary hover:translate-x-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/40 mr-2 transition-all group-hover:bg-primary group-hover:w-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="col-span-2 sm:col-span-1 space-y-8">
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text/80">
                  {locale.startsWith('th') ? 'ติดต่อ' : 'CONTACT'}
                </h3>
                <ul className="space-y-4">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="group">
                      <span className="block text-xs font-medium text-text/60 mb-1">{item.label}</span>
                      {item.href ? (
                        <Link 
                          href={item.href as any} 
                          className="text-sm text-text-muted transition-colors hover:text-primary inline-flex items-center gap-1"
                        >
                          {item.value}
                          <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-sm text-text-muted">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-text/80">
                  {locale.startsWith('th') ? 'ติดตามเรา' : 'FOLLOW US'}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <li key={social.label}>
                        <Link 
                          href={social.href as any} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-hairline/50 bg-surface/30 text-text-muted transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                          title={social.label}
                        >
                          <IconComponent className="h-5 w-5" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-hairline/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-xs text-text-muted sm:flex-row">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="flex items-center gap-2">
                <span>&copy; {new Date().getFullYear()} Cerebratechai</span>
                <span className="hidden sm:inline">•</span>
                <span>{locale.startsWith('th') ? 'สงวนลิขสิทธิ์' : 'All rights reserved'}</span>
              </p>
              <p className="text-xs text-text-muted/80 text-center sm:text-left">
                {locale.startsWith('th') 
                  ? 'เปลี่ยนปัญหาเป็นระบบ AI พร้อมใช้งานจริง'
                  : 'Transforming problems into production-ready AI systems'
                }
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-2">
              <p className="flex items-center gap-1.5">
                {locale.startsWith('th') ? 'สร้างด้วย' : 'Made with'} 
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {locale.startsWith('th') ? 'ในประเทศไทย' : 'in Thailand'}
              </p>
              <p className="text-xs text-text-muted/80">
                {locale.startsWith('th') ? 'พร้อมให้บริการ 24/7' : 'Available 24/7'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
