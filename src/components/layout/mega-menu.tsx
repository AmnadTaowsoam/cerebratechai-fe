'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MegaMenuSection } from '@/data/navigation';

interface MegaMenuProps {
  sections: MegaMenuSection[];
  locale: string;
}

export function MegaMenu({ sections, locale }: MegaMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (sectionId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSection(sectionId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSection(null);
    }, 200); // 200ms delay for better UX
  };

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveSection(activeSection === sectionId ? null : sectionId);
    } else if (e.key === 'Escape') {
      setActiveSection(null);
    }
  };

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(section.id)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={cn(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg',
              'text-text-muted hover:text-text hover:bg-surface-2',
              'transition-all duration-200 hover:scale-[1.02]',
              'relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2',
              'after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 after:rounded-full',
              'hover:after:w-3/4',
              activeSection === section.id && 'text-text bg-surface-2 shadow-sm after:w-3/4'
            )}
            aria-expanded={activeSection === section.id}
            aria-haspopup="true"
            onKeyDown={(e) => handleKeyDown(e, section.id)}
          >
            {section.label}
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-all duration-200',
                activeSection === section.id && 'rotate-180 text-primary'
              )}
              aria-hidden="true"
            />
          </button>

          {/* Dropdown Panel */}
          <AnimatePresence>
            {activeSection === section.id && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute left-0 top-full pt-3 z-[100]"
                role="menu"
                aria-orientation="vertical"
              >
                <div className={cn(
                  "bg-surface-2 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl",
                  "ring-1 ring-white/10",
                  "overflow-hidden",
                  section.columns.length === 1 && "w-[340px]",
                  section.columns.length === 2 && "w-[680px]",
                  section.columns.length === 3 && "w-[960px]",
                  section.columns.length === 4 && "w-[1200px]",
                  section.columns.length > 4 && "w-[1280px]"
                )}>
                  {/* Solid background overlay for better readability */}
                  <div className="absolute inset-0 bg-surface-2/95 backdrop-blur-2xl pointer-events-none" />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 pointer-events-none" />
                  <div className="relative p-6">
                    <div className={cn(
                      "grid gap-8",
                      section.columns.length === 1 && "grid-cols-1",
                      section.columns.length === 2 && "grid-cols-2",
                      section.columns.length === 3 && "grid-cols-3",
                      section.columns.length === 4 && "grid-cols-4",
                      section.columns.length > 4 && "grid-cols-4"
                    )}>
                      {section.columns.map((column, idx) => (
                        <div key={idx} className="space-y-4">
                          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4 pb-2.5 border-b border-white/15 flex items-center gap-2">
                            <span className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
                            {column.title}
                          </h3>
                          <ul className="space-y-2" role="none">
                            {column.items.map((item) => {
                              const href = item.external ? item.href : `/${locale}${item.href}`;
                              const LinkComponent = item.external ? 'a' : Link;
                              const linkProps = item.external 
                                ? { href, target: '_blank', rel: 'noopener noreferrer' }
                                : { href: href as any };
                              
                              return (
                                <li key={item.href} role="none">
                                  <LinkComponent
                                    {...linkProps}
                                    className={cn(
                                      'group flex items-start gap-3 px-3 py-3 rounded-xl',
                                      'text-sm font-medium text-white/80 hover:text-white',
                                      'hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10',
                                      'transition-all duration-200 hover:translate-x-1 hover:shadow-md',
                                      'border border-transparent hover:border-primary/20',
                                      item.badge === 'featured' && 'bg-gradient-to-r from-amber-500/5 to-orange-500/5 border-amber-500/10',
                                      item.badge === 'new' && 'bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border-emerald-500/10'
                                    )}
                                    role="menuitem"
                                  >
                                    {item.icon && (
                                      <div className={cn(
                                        "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0",
                                        "bg-gradient-to-br from-primary/20 to-accent/20 shadow-sm",
                                        "group-hover:from-primary/30 group-hover:to-accent/30 group-hover:shadow-md group-hover:scale-110",
                                        item.badge === 'featured' && "ring-2 ring-amber-500/30 bg-gradient-to-br from-amber-500/20 to-orange-500/20",
                                        item.badge === 'new' && "ring-2 ring-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
                                      )}>
                                        <item.icon className={cn(
                                          "w-[18px] h-[18px] transition-colors",
                                          item.badge === 'featured' ? "text-amber-400 group-hover:text-amber-300" :
                                          item.badge === 'new' ? "text-emerald-400 group-hover:text-emerald-300" :
                                          "text-primary group-hover:text-primary"
                                        )} aria-hidden="true" />
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                        <span className="leading-snug font-semibold">{item.label}</span>
                                        {item.badge && (
                                          <span
                                            className={cn(
                                              'text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide flex-shrink-0',
                                              item.badge === 'new' && 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
                                              item.badge === 'featured' && 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
                                              item.badge === 'beta' && 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            )}
                                          >
                                            {item.badge}
                                          </span>
                                        )}
                                        {item.external && (
                                          <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-white/50 mt-1 leading-relaxed group-hover:text-white/70 transition-colors">{item.description}</p>
                                      )}
                                    </div>
                                  </LinkComponent>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );

  // Mobile Navigation (Drawer)
  const MobileNav = () => (
    <div className="lg:hidden">
      <div className="space-y-0.5">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-surface-2/50">
            <button
              className="w-full flex items-center justify-between px-4 py-3.5 text-text-muted hover:text-text hover:bg-surface-2/50 active:bg-surface-2 transition-all duration-200 rounded-lg mx-1"
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              aria-expanded={activeSection === section.id}
            >
              <span className="font-semibold text-sm">{section.label}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-all duration-200',
                  activeSection === section.id && 'rotate-180 text-primary'
                )}
              />
            </button>
            <AnimatePresence>
              {activeSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-2 space-y-5 bg-gradient-to-b from-surface/40 to-surface/20">
                    {section.columns.map((column, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-xs font-bold text-text-subtle uppercase tracking-wider px-2 flex items-center gap-2">
                          <span className="w-0.5 h-3 bg-primary rounded-full" />
                          {column.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {column.items.map((item) => {
                            const href = item.external ? item.href : `/${locale}${item.href}`;
                            const LinkComponent = item.external ? 'a' : Link;
                            const linkProps = item.external 
                              ? { href, target: '_blank', rel: 'noopener noreferrer' }
                              : { href: href as any };
                            
                            return (
                              <li key={item.href}>
                                <LinkComponent
                                  {...linkProps}
                                  className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-muted hover:text-text",
                                    "hover:bg-surface-2/70 active:bg-surface-2 transition-all duration-200 group",
                                    item.badge === 'featured' && "bg-amber-500/5 border border-amber-500/20",
                                    item.badge === 'new' && "bg-emerald-500/5 border border-emerald-500/20"
                                  )}
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {item.icon && (
                                    <div className={cn(
                                      "w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0",
                                      "bg-primary/10 group-hover:bg-primary/20",
                                      item.badge === 'featured' && "bg-amber-500/20 group-hover:bg-amber-500/30",
                                      item.badge === 'new' && "bg-emerald-500/20 group-hover:bg-emerald-500/30"
                                    )}>
                                      <item.icon className={cn(
                                        "w-4 h-4",
                                        item.badge === 'featured' ? "text-amber-400" :
                                        item.badge === 'new' ? "text-emerald-400" :
                                        "text-primary"
                                      )} />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="font-medium">{item.label}</span>
                                      {item.badge && (
                                        <span
                                          className={cn(
                                            'text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide',
                                            item.badge === 'new' && 'bg-emerald-500/20 text-emerald-400',
                                            item.badge === 'featured' && 'bg-amber-500/20 text-amber-400',
                                            item.badge === 'beta' && 'bg-blue-500/20 text-blue-400'
                                          )}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                      {item.external && (
                                        <ExternalLink className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                                      )}
                                    </div>
                                    {item.description && (
                                      <p className="text-xs text-text-muted/70 mt-0.5 leading-relaxed line-clamp-1">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                </LinkComponent>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
