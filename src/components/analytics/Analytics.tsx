'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import Script from 'next/script';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
}

export function Analytics({ 
  googleAnalyticsId,
  googleTagManagerId,
  facebookPixelId 
}: AnalyticsProps) {
  const locale = useLocale();

  useEffect(() => {
    // Google Analytics 4
    if (googleAnalyticsId && typeof window !== 'undefined') {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        // @ts-ignore
        window.dataLayer.push(args);
      }
      
      // @ts-ignore
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'locale'
        }
      });
      
      gtag('config', googleAnalyticsId, {
        locale: locale
      });
    }

    // Facebook Pixel
    if (facebookPixelId && typeof window !== 'undefined') {
      // @ts-ignore
      window.fbq = window.fbq || function(...args: any[]) {
        // @ts-ignore
        (window.fbq.q = window.fbq.q || []).push(args);
      };
      
      // @ts-ignore
      window.fbq('init', facebookPixelId);
      // @ts-ignore
      window.fbq('track', 'PageView');
    }
  }, [googleAnalyticsId, facebookPixelId, locale]);

  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  locale: '${locale}'
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {googleTagManagerId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${googleTagManagerId}');
              `,
            }}
          />
        </>
      )}

      {/* Facebook Pixel */}
      {facebookPixelId && (
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}

// Google Tag Manager Body Script
export function GoogleTagManagerBody({ googleTagManagerId }: { googleTagManagerId?: string }) {
  if (!googleTagManagerId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', eventName, parameters);
    }

    // Facebook Pixel
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', eventName, parameters);
    }
  }
};

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: title,
        page_location: url,
      });
    }

    // Facebook Pixel
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'PageView');
    }
  }
};

export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'THB',
      });
    }

    // Facebook Pixel
    // @ts-ignore
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Lead', {
        value: value,
        currency: currency || 'THB',
      });
    }
  }
};
