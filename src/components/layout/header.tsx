'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale();
  const basePath = `/${locale}`;

  // Force re-render when locale changes
  const navigationKey = `nav-${locale}`;

  // Reset state when locale changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [locale]);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navigation = useMemo(() => [
    {
      name: 'Solutions',
      href: `${basePath}/solutions`,
      dropdown: [
        { name: 'All Solutions', href: `${basePath}/solutions` },
        { name: 'LLM & RAG', href: `${basePath}/solutions#llm-rag` },
        { name: 'Computer Vision', href: `${basePath}/solutions#computer-vision` },
        { name: 'Predictive Analytics', href: `${basePath}/solutions#predictive-analytics` },
        { name: 'Edge AI & IoT', href: `${basePath}/solutions#edge-ai` },
      ]
    },
    {
      name: 'Industries',
      href: `${basePath}/industries`,
      dropdown: [
        { name: 'All Industries', href: `${basePath}/industries` },
        { name: 'Manufacturing', href: `${basePath}/industries/manufacturing` },
        { name: 'Healthcare', href: `${basePath}/industries/healthcare` },
        { name: 'Logistics', href: `${basePath}/industries/logistics` },
        { name: 'Enterprise', href: `${basePath}/industries/enterprise` },
      ]
    },
    { name: 'Case Studies', href: `${basePath}/cases` },
    { name: 'Packages', href: `${basePath}/packages` },
    {
      name: 'Resources',
      href: `${basePath}/resources`,
      dropdown: [
        { name: 'All Resources', href: `${basePath}/resources` },
        { name: 'Blog', href: `${basePath}/blog` },
        { name: 'Support', href: `${basePath}/support` },
      ]
    },
    {
      name: 'Company',
      href: `${basePath}/about`,
      dropdown: [
        { name: 'About Us', href: `${basePath}/about` },
        { name: 'How We Work', href: `${basePath}/how-we-work` },
        { name: 'Trust & Security', href: `${basePath}/trust` },
        { name: 'Careers', href: `${basePath}/careers` },
        { name: 'Partners', href: `${basePath}/partners` },
      ]
    },
  ], [basePath]);

  return (
    <header key={navigationKey} className="sticky top-0 z-50 w-full border-b border-hairline bg-bg/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={basePath as any} className="flex items-center space-x-2">
              <Image
                src="/cerebratechai_logo.png"
                alt="Cerebratechai logo"
                width={36}
                height={36}
                priority
              />
              <span className="text-xl font-bold text-text">Cerebratechai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
                        className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-hairline bg-surface shadow-lg py-2 z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={`${locale}-${dropdownItem.name}`}
                            href={dropdownItem.href as any}
                            className="block px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-surface-2 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LocaleSwitcher />
            <Button size="sm" asChild>
              <Link href={`${basePath}/contact` as any}>Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={`${locale}-mobile-${dropdownItem.name}`}
                          href={dropdownItem.href as any}
                          className="block px-3 py-1 text-sm text-text-muted hover:text-text hover:bg-surface-2 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <LocaleSwitcher />
                <Button size="sm" className="ml-2" asChild>
                  <Link href={`${basePath}/contact` as any}>Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
