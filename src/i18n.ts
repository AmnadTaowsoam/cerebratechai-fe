import { notFound } from 'next/navigation';
import { getRequestConfig, setRequestLocale } from 'next-intl/server';
import type { IntlError } from 'next-intl';

// Can be imported from a shared config
const locales = ['th', 'en'] as const;
const defaultLocale = 'th' as const;

type SupportedLocale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Normalize locale identifiers like en-US or en_US to match supported locales
  const normalized = (locale ?? defaultLocale)
    .toString()
    .toLowerCase()
    .split(/[-_]/)[0] as SupportedLocale;

  const resolved = locales.includes(normalized) ? normalized : defaultLocale;
  if (!locales.includes(resolved)) notFound();

  // Inform next-intl of the active locale
  setRequestLocale(resolved);

  return {
    locale: resolved,
    messages: (await import(`./i18n/${resolved}.json`)).default,
    timeZone: 'Asia/Bangkok',
    now: new Date(),
    // Provide graceful fallbacks and silence console noise for missing messages
    onError: (error: IntlError) => {
      if (error.code === 'MISSING_MESSAGE') return;
      console.error('[i18n]', error);
    },
    getMessageFallback: ({ key }) => key,
  };
});

export { locales, defaultLocale };
