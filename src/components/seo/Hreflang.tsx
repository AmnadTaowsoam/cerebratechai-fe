'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

interface HreflangProps {
  currentPath?: string;
}

export function Hreflang({ currentPath }: HreflangProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Get the path without locale
  const pathWithoutLocale =
    currentPath || pathname.replace(`/${locale}`, '') || '/';

  const locales = ['en', 'th'];

  return (
    <>
      {locales.map(loc => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={`${baseUrl}/${loc}${pathWithoutLocale}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${pathWithoutLocale}`}
      />
    </>
  );
}

// Static hreflang for specific pages
export function StaticHreflang({
  path,
  locales = ['en', 'th'],
}: {
  path: string;
  locales?: string[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <>
      {locales.map(locale => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}/${locale}${path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${path}`}
      />
    </>
  );
}
