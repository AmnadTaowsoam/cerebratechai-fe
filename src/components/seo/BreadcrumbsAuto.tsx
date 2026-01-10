'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Breadcrumbs, generateBreadcrumbs } from './Breadcrumbs';

export function BreadcrumbsAuto({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname() || '';

  const items = generateBreadcrumbs(pathname, locale);
  if (items.length === 0) return null;

  return (
    <div className={`border-b border-hairline bg-bg/40 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumbs items={items} />
      </div>
    </div>
  );
}
