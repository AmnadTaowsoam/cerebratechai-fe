import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { QueryProvider } from '@/components/providers/query-provider';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Cerebratechai',
    default: 'Turn pain points into production-ready AI | Cerebratechai',
  },
  description: 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
  keywords: ['AI', 'Machine Learning', 'Computer Vision', 'Cloud Computing', 'Full-Stack Development', 'Edge Computing'],
  authors: [{ name: 'Cerebratechai Team' }],
  creator: 'Cerebratechai',
  publisher: 'Cerebratechai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'th': '/th',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Turn pain points into production-ready AI | Cerebratechai',
    description: 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    siteName: 'Cerebratechai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cerebratechai - AI & Full-Stack Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn pain points into production-ready AI | Cerebratechai',
    description: 'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud that are ready for deployment.',
    images: ['/og-image.jpg'],
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
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <QueryProvider>
          <ErrorBoundary>
            <a className="sr-only focus:not-sr-only" href="#main">
              Skip to main content
            </a>
            <Header />
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
