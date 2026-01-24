'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath as any);
  };

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => switchLocale('th')}
        className={`transition-colors ${
          locale === 'th'
            ? 'text-primary font-semibold'
            : 'text-text-muted hover:text-text'
        }`}
        aria-label="Switch to Thai"
      >
        TH
      </button>
      <span className="text-text-muted">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors ${
          locale === 'en'
            ? 'text-primary font-semibold'
            : 'text-text-muted hover:text-text'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
