import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { QueryProvider } from '@/components/providers/query-provider';
import { NonceProvider } from '@/components/providers/nonce-provider';
import { Analytics } from '@/components/analytics/Analytics';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from '@/components/ui/toaster';
import {
  PerformanceOptimizations,
  WebVitalsScript,
  ResourceHints,
} from '@/components/seo';
import { ScrollObserver } from '@/lib/scroll-observer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default:
      'CerebraTechAI - Turn Pain Points into Production-Ready AI Systems',
    template: '%s | CerebraTechAI',
  },
  keywords: [
    'AI solutions Thailand',
    'Machine Learning services',
    'Computer Vision development',
    'LLM implementation',
    'RAG systems',
    'AIoT solutions',
    'Edge Computing',
    'Full-stack AI development',
    'Production-ready AI',
    'AI consulting Bangkok',
    'Custom AI development',
    'AI system integration',
    'Thailand AI company',
    'Boutique AI studio',
    'AI development services',
    'Machine Learning consulting',
    'Computer Vision solutions',
    'Natural Language Processing',
    'AI automation',
    'AI transformation',
  ],
  authors: [{ name: 'CerebraTechAI Team' }],
  creator: 'CerebraTechAI',
  publisher: 'CerebraTechAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  alternates: {
    languages: {
      th: '/th',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    // Locale will be set dynamically by locale-specific layouts
    url: '/',
    title: 'CerebraTechAI - Turn Pain Points into Production-Ready AI Systems',
    description:
      'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks, ready for production deployment.',
    siteName: 'CerebraTechAI',
    images: [
      {
        url: '/cerebratechai_logo.png',
        width: 1200,
        height: 630,
        alt: 'CerebraTechAI - AI Solutions Studio in Bangkok, Thailand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CerebraTechAI - Turn Pain Points into Production-Ready AI Systems',
    description:
      'Transform your pain points into production-ready AI systems. We build AI & full-stack solutions from Edge to Cloud with guardrails and playbooks.',
    images: ['/cerebratechai_logo.png'],
    creator: '@cerebratechai',
    site: '@cerebratechai',
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
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    ...(process.env.FACEBOOK_DOMAIN_VERIFICATION ||
    process.env.PINTEREST_VERIFICATION ||
    process.env.BING_VERIFICATION
      ? {
          other: {
            ...(process.env.FACEBOOK_DOMAIN_VERIFICATION && {
              'facebook-domain-verification':
                process.env.FACEBOOK_DOMAIN_VERIFICATION,
            }),
            ...(process.env.PINTEREST_VERIFICATION && {
              'pinterest-site-verification': process.env.PINTEREST_VERIFICATION,
            }),
            ...(process.env.BING_VERIFICATION && {
              'msvalidate.01': process.env.BING_VERIFICATION,
            }),
          },
        }
      : {}),
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = headers();
  const nonce = requestHeaders.get('x-nonce');
  // Set by next-intl middleware; falls back to English.
  const locale = requestHeaders.get('x-next-intl-locale') ?? 'en';

  return (
    <html
      lang={locale}
      dir="ltr"
      className={cn(inter.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0B1220" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0B1220" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {nonce ? <meta name="csp-nonce" content={nonce} /> : null}

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={cn('min-h-screen bg-bg text-text antialiased')}>
        <NonceProvider nonce={nonce}>
          <QueryProvider>
            {/* SEO and Performance Optimizations */}
            <PerformanceOptimizations />
            <PerformanceOptimizations />
            <WebVitalsScript />
            <ResourceHints />
            <ScrollObserver />

            {/* Skip link for accessibility */}
            <a href="#main" className="skip-link">
              Skip to main content
            </a>

            {children}

            <Toaster />
            <Analytics />
            <SpeedInsights />
          </QueryProvider>
        </NonceProvider>
      </body>
    </html>
  );
}
