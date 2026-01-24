import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Create the intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

const trustedScriptHosts = ['https://unpkg.com'];
const inlineScriptHashes = [
  "'sha256-Ph/QwnQiwklgtr/n++X4WjXCJZg7LwOQMhFEhUOkmls='",
];

const baseConnectSources = ["'self'", 'https://vitals.vercel-analytics.com'];

const serviceUrls = [
  process.env.NEXT_PUBLIC_CONTENT_API_URL,
  process.env.CONTACT_SERVICE_URL,
].filter(Boolean) as string[];

const serviceOrigins = serviceUrls
  .map(url => {
    try {
      return new URL(url).origin;
    } catch {
      return url;
    }
  })
  .filter(Boolean);

const connectSrc = Array.from(
  new Set([...baseConnectSources, ...serviceOrigins])
);

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return intlMiddleware(request);
  }

  const response = intlMiddleware(request);

  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const nonce = btoa(String.fromCharCode(...Array.from(array)));

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...trustedScriptHosts,
    ...inlineScriptHashes,
  ].join(' ');

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    `connect-src ${connectSrc.join(' ')}`,
    "frame-ancestors 'none'",
    "form-action 'self'",
    "object-src 'none'",
    "media-src 'self'",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    'upgrade-insecure-requests',
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=()'
  );
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-site');
  response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: [
    // Run on all paths except for: /api, /_next, and static assets and well-known files
    '/((?!api|_next|favicon.ico|manifest.json|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
