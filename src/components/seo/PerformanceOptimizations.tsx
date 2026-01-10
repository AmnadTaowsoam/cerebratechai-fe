'use client';

import { useEffect } from 'react';

export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/cerebratechai_logo.png',
        '/cerebratechai_logo.png', // Using logo as og-image fallback
        '/favicon.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Preconnect to external domains
    const preconnectExternalDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('fonts.gstatic.com')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // DNS prefetch for performance
    const dnsPrefetch = () => {
      const domains = [
        '//www.google-analytics.com',
        '//www.googletagmanager.com',
        '//fonts.googleapis.com',
        '//fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    preconnectExternalDomains();
    dnsPrefetch();

    // Lazy load images when they come into view
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Initialize lazy loading
    lazyLoadImages();

    // Prefetch next page on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Initialize prefetching
    prefetchOnHover();

  }, []);

  return null;
}

// Web Vitals monitoring
export function WebVitalsScript() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
    script.onload = () => {
      // @ts-ignore
      if (window.webVitals) {
        // @ts-ignore
        window.webVitals.getCLS(console.log);
        // @ts-ignore
        window.webVitals.getFID(console.log);
        // @ts-ignore
        window.webVitals.getFCP(console.log);
        // @ts-ignore
        window.webVitals.getLCP(console.log);
        // @ts-ignore
        window.webVitals.getTTFB(console.log);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

// Resource hints for better performance
export function ResourceHints() {
  return (
    <>
      {/* Prefetch likely next pages */}
      <link rel="prefetch" href="/th/solutions" />
      <link rel="prefetch" href="/th/packages" />
      <link rel="prefetch" href="/th/contact" />
      <link rel="prefetch" href="/en/solutions" />
      <link rel="prefetch" href="/en/packages" />
      <link rel="prefetch" href="/en/contact" />
    </>
  );
}
