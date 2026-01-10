'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown, Menu, X } from 'lucide-react';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { Button } from '@/components/ui/button';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string; isSection?: boolean }>;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const locale = useLocale();
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');

  const basePath = `/${locale}`;

  const navigationKey = `nav-${locale}`;

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [locale]);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navigation: NavigationItem[] = useMemo(
    () => [
      {
        name: tNav('solutions'),
        href: `${basePath}/solutions`,
        dropdown: [
          { name: tNav('all_solutions'), href: `${basePath}/solutions` },
          { name: tServices('solution_types.ai_core'), href: `${basePath}/solutions`, isSection: true },
          { name: tServices('service_category_labels.llm'), href: `${basePath}/solutions#llm-rag` },
          { name: tServices('service_category_labels.cv'), href: `${basePath}/solutions#computer-vision` },
          { name: tServices('service_category_labels.ml'), href: `${basePath}/solutions#machine-learning` },
          { name: tServices('service_category_labels.aiot'), href: `${basePath}/solutions#aiot` },
          {
            name: tServices('solution_types.engineering_accelerators'),
            href: `${basePath}/solutions`,
            isSection: true,
          },
          { name: tServices('service_category_labels.platform'), href: `${basePath}/solutions#platforms` },
          { name: tServices('service_category_labels.analytics'), href: `${basePath}/solutions#analytics` },
        ],
      },
      {
        name: tNav('industries'),
        href: `${basePath}/industries`,
        dropdown: [
          { name: tNav('all_industries'), href: `${basePath}/industries` },
          { name: tNav('manufacturing'), href: `${basePath}/industries/manufacturing` },
          { name: tNav('healthcare'), href: `${basePath}/industries/healthcare` },
          { name: tNav('logistics'), href: `${basePath}/industries/logistics` },
          { name: tNav('enterprise'), href: `${basePath}/industries/enterprise` },
        ],
      },
      { name: tNav('cases'), href: `${basePath}/cases` },
      { name: tNav('packages'), href: `${basePath}/packages` },
      {
        name: tNav('resources'),
        href: `${basePath}/resources`,
        dropdown: [
          { name: tNav('all_resources'), href: `${basePath}/resources` },
          { name: tNav('blog'), href: `${basePath}/blog` },
          { name: tNav('support'), href: `${basePath}/support` },
        ],
      },
      {
        name: tNav('company'),
        href: `${basePath}/about`,
        dropdown: [
          { name: tNav('about_us'), href: `${basePath}/about` },
          { name: tNav('how_we_work'), href: `${basePath}/how-we-work` },
          { name: tNav('trust_security'), href: `${basePath}/trust` },
          { name: tNav('careers'), href: `${basePath}/careers` },
          { name: tNav('partners'), href: `${basePath}/partners` },
        ],
      },
    ],
    [basePath, tNav, tServices]
  );

  return (
    <header
      key={navigationKey}
      className="sticky top-0 z-50 w-full border-b border-hairline bg-bg/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={basePath as any} className="flex items-center space-x-2">
            <Image src="/cerebratechai_logo.png" alt="CerebraTechAI logo" width={36} height={36} priority />
            <span className="text-xl font-bold text-text">CerebraTechAI</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={`${locale}-${item.name}`} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href as any}
                      className="flex items-center gap-1 text-text-muted hover:text-text transition-colors duration-200 font-medium"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 rounded-lg border border-hairline bg-surface shadow-lg py-2 z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) =>
                          dropdownItem.isSection ? (
                            <div
                              key={`${locale}-${dropdownItem.name}`}
                              className="px-4 py-2 text-xs font-semibold text-text/50 uppercase tracking-wider"
                            >
                              {dropdownItem.name}
                            </div>
                          ) : (
                            <Link
                              key={`${locale}-${dropdownItem.name}`}
                              href={dropdownItem.href as any}
                              className="block px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-surface-2 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href as any}
                    className="text-text-muted hover:text-text transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LocaleSwitcher />
            <Button size="sm" asChild>
              <Link href={`${basePath}/contact` as any}>{tNav('contact')}</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-hairline">
              {navigation.map((item) => (
                <div key={`${locale}-mobile-${item.name}`}>
                  <Link
                    href={item.href as any}
                    className="block px-3 py-2 text-base font-medium text-text-muted hover:text-text hover:bg-surface-2 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) =>
                        dropdownItem.isSection ? (
                          <div
                            key={`${locale}-mobile-${dropdownItem.name}`}
                            className="px-3 py-1 text-xs font-semibold text-text/50 uppercase tracking-wider"
                          >
                            {dropdownItem.name}
                          </div>
                        ) : (
                          <Link
                            key={`${locale}-mobile-${dropdownItem.name}`}
                            href={dropdownItem.href as any}
                            className="block px-3 py-1 text-sm text-text-muted hover:text-text hover:bg-surface-2 rounded-md transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between px-3 py-2">
                <LocaleSwitcher />
                <Button size="sm" className="ml-2" asChild>
                  <Link href={`${basePath}/contact` as any}>{tNav('contact')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

