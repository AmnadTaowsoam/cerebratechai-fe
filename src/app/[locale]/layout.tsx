import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { QueryProvider } from '@/components/providers/query-provider';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import type { Metadata } from 'next';
import { defaultLocale, locales } from '@/i18n';
import { BreadcrumbsAuto } from '@/components/seo';
import { AccessibilityTools } from '@/components/a11y/accessibility-tools';
import Script from 'next/script';

// Generate dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const resolvedLocale = locales.includes(locale as any)
    ? locale
    : defaultLocale;

  const ogLocale = resolvedLocale === 'th' ? 'th_TH' : 'en_US';
  const alternateLocale = resolvedLocale === 'th' ? 'en_US' : 'th_TH';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CerebraTechAI',
    url: 'https://www.cerebratechai.com',
    logo: 'https://www.cerebratechai.com/cerebratechai_logo.png',
    description: "Engineering Intelligence for Thailand's Future",
    sameAs: [
      'https://www.linkedin.com/company/cerebratechai',
      'https://www.facebook.com/cerebratechai',
      'https://line.me/ti/p/@cerebratechai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-2-XXX-XXXX',
      contactType: 'sales',
      availableLanguage: ['Thai', 'English'],
    },
  };

  return {
    openGraph: {
      locale: ogLocale,
      alternateLocale: alternateLocale,
    },
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages: {
        en: '/en',
        th: '/th',
      },
    },
    other: {
      'application/ld+json': JSON.stringify(organizationSchema),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const normalized = (locale ?? defaultLocale)
    .toString()
    .toLowerCase()
    .split(/[-_]/)[0] as (typeof locales)[number];
  const resolved = locales.includes(normalized) ? normalized : defaultLocale;

  setRequestLocale(resolved);
  const messages = (await import(`../../i18n/${resolved}.json`)).default;

  return (
    <NextIntlClientProvider
      key={resolved}
      locale={resolved}
      messages={messages}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <QueryProvider>
          <ErrorBoundary>
            <a className="sr-only focus:not-sr-only" href="#main">
              Skip to main content
            </a>
            <Header />
            <BreadcrumbsAuto />
            <main id="main" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <Toaster />
            <AccessibilityTools />
          </ErrorBoundary>
        </QueryProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
