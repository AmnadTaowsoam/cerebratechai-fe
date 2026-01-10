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

export const metadata: Metadata = {
  title: {
    template: '%s | CerebraTechAI',
    default: 'Turn pain points into production-ready AI | CerebraTechAI',
  },
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'Cloud Computing', 'Full-Stack Development', 'Edge Computing'],
  authors: [{ name: 'CerebraTechAI Team' }],
  creator: 'CerebraTechAI',
  publisher: 'CerebraTechAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    languages: {
      'en': '/en',
      'th': '/th',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Turn pain points into production-ready AI | CerebraTechAI',
    description: 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    siteName: 'CerebraTechAI',
    images: [
      {
        url: '/cerebratechai_logo.png',
        width: 1200,
        height: 630,
        alt: 'CerebraTechAI - AI & Full-Stack Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn pain points into production-ready AI | CerebraTechAI',
    description: 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    images: ['/cerebratechai_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const normalized = (locale ?? defaultLocale).toString().toLowerCase().split(/[-_]/)[0] as (typeof locales)[number];
  const resolved = locales.includes(normalized) ? normalized : defaultLocale;

  setRequestLocale(resolved);
  const messages = (await import(`../../i18n/${resolved}.json`)).default;

  return (
    <NextIntlClientProvider key={resolved} locale={resolved} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
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
          </ErrorBoundary>
        </QueryProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
