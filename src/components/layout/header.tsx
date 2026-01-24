'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { MegaMenu } from './mega-menu';
import { navigationData } from '@/data/navigation';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Button } from '@/components/ui/button';
import { BRAND_CONFIG } from '@/config/brand';
import { routes } from '@/lib/routes';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string; isSection?: boolean }>;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale = useLocale();
  const tNav = useTranslations('nav');

  useEffect(() => {
    setIsMenuOpen(false);
  }, [locale]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-bg/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href={routes.home(locale)} 
            className="flex items-center space-x-2.5 hover:opacity-80 transition-opacity duration-200"
          >
            <Image 
              src="/cerebratechai_logo.png" 
              alt={`${BRAND_CONFIG.name} logo`} 
              width={36} 
              height={36} 
              priority 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-text hidden sm:inline-block">{BRAND_CONFIG.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <MegaMenu sections={navigationData} locale={locale} />

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-3">
            <LocaleSwitcher />
            <Button size="sm" asChild className="font-semibold">
              <Link href={routes.contact(locale)}>{tNav('contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="hover:bg-surface-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden border-t border-hairline bg-bg/98 backdrop-blur-md overflow-hidden"
            >
            <div className="px-2 pt-3 pb-4 space-y-1">
              <MegaMenu sections={navigationData} locale={locale} />

              <div className="flex items-center justify-between px-3 py-3 mt-4 border-t border-surface-2/50">
                <LocaleSwitcher />
                <Button size="sm" className="ml-2 font-semibold" asChild>
                  <Link href={routes.contact(locale)}>{tNav('contact')}</Link>
                </Button>
              </div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

