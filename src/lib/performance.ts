// Performance monitoring and optimization utilities

// Core Web Vitals thresholds
export const CORE_WEB_VITALS = {
  LCP: 2.5, // Largest Contentful Paint (seconds)
  FID: 100, // First Input Delay (milliseconds)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1.8, // First Contentful Paint (seconds)
  TTFB: 600, // Time to First Byte (milliseconds)
};

// Performance budget
export const PERFORMANCE_BUDGET = {
  JS: 250, // JavaScript bundle size (KB)
  CSS: 50, // CSS bundle size (KB)
  IMAGES: 500, // Total images size (KB)
  FONTS: 100, // Fonts size (KB)
  THIRD_PARTY: 200, // Third-party scripts size (KB)
};

// Image optimization settings
export const IMAGE_OPTIMIZATION = {
  QUALITY: 80,
  FORMATS: ['webp', 'avif', 'jpeg'],
  SIZES: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  PLACEHOLDER: 'blur',
};

// Font optimization
export const FONT_OPTIMIZATION = {
  DISPLAY: 'swap',
  PRELOAD: true,
  SUBSET: true,
  FALLBACK: ['system-ui', '-apple-system', 'sans-serif'],
};

// Lazy loading configuration
export const LAZY_LOADING = {
  ROOT_MARGIN: '50px',
  THRESHOLD: 0.1,
  ENABLE_IMAGES: true,
  ENABLE_COMPONENTS: true,
};

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: PerformanceObserver[] = [];

  private constructor() {
    this.initializeObservers();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializeObservers() {
    if (typeof window === 'undefined') return;

    // Core Web Vitals observer
    try {
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          this.handleMetric(entry);
        }
      });

      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
      });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }

  private handleMetric(entry: PerformanceEntry) {
    const name = entry.name;
    const value = (entry as any).value || (entry as any).delta || 0;

    this.metrics.set(name, value);

    // Check against thresholds
    this.checkThreshold(name, value);
  }

  private checkThreshold(metricName: string, value: number) {
    const thresholds: Record<string, number> = {
      'largest-contentful-paint': CORE_WEB_VITALS.LCP * 1000,
      'first-input': CORE_WEB_VITALS.FID,
      'layout-shift': CORE_WEB_VITALS.CLS,
    };

    const threshold = thresholds[metricName];
    if (threshold && value > threshold) {
      console.warn(`Performance warning: ${metricName} exceeded threshold`, {
        value,
        threshold,
        difference: value - threshold,
      });
    }
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Resource timing analysis
  analyzeResourceTiming() {
    if (typeof window === 'undefined') return {};

    const resources = performance.getEntriesByType(
      'resource'
    ) as PerformanceResourceTiming[];
    const analysis = {
      total: resources.length,
      byType: {} as Record<string, number>,
      bySize: {
        small: 0, // < 100KB
        medium: 0, // 100KB - 1MB
        large: 0, // > 1MB
      },
      slow: [] as PerformanceResourceTiming[],
    };

    resources.forEach(resource => {
      const type = resource.initiatorType;
      const size = resource.transferSize || 0;

      analysis.byType[type] = (analysis.byType[type] || 0) + 1;

      if (size < 100000) analysis.bySize.small++;
      else if (size < 1000000) analysis.bySize.medium++;
      else analysis.bySize.large++;

      if (resource.duration > 1000) {
        analysis.slow.push(resource);
      }
    });

    return analysis;
  }

  // Bundle size analysis
  analyzeBundleSize() {
    if (typeof window === 'undefined') return {};

    const scripts = Array.from(
      document.querySelectorAll('script[src]')
    ) as HTMLScriptElement[];
    const stylesheets = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    ) as HTMLLinkElement[];

    const analysis = {
      scripts: {
        count: scripts.length,
        totalSize: 0,
        external: 0,
        inline: 0,
      },
      stylesheets: {
        count: stylesheets.length,
        totalSize: 0,
        external: 0,
        inline: 0,
      },
    };

    // Analyze scripts
    scripts.forEach(script => {
      if (script.src) {
        analysis.scripts.external++;
        // Note: Actual size would need to be fetched
      } else {
        analysis.scripts.inline++;
        analysis.scripts.totalSize += script.textContent?.length || 0;
      }
    });

    // Analyze stylesheets
    stylesheets.forEach(link => {
      if (link.href) {
        analysis.stylesheets.external++;
        // Note: Actual size would need to be fetched
      } else {
        analysis.stylesheets.inline++;
        analysis.stylesheets.totalSize += link.textContent?.length || 0;
      }
    });

    return analysis;
  }

  // Memory usage analysis
  analyzeMemoryUsage() {
    if (typeof window === 'undefined' || !(window as any).performance.memory)
      return null;

    const memory = (window as any).performance.memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      limit: memory.jsHeapSizeLimit,
      percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
    };
  }

  // Cleanup
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics.clear();
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Utility functions
export function preloadResource(href: string, as: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
}

export function prefetchRoute(href: string) {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

export function optimizeImages() {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
