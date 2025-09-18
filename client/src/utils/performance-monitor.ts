// Core Web Vitals monitoring for performance optimization
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Cumulative Layout Shift (CLS)
  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const clsObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // Only count if page was not hidden during shift
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        clsEntries.push(entry);
      }
    }
  });

  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    // Layout shift not supported
  }

  // Monitor Largest Contentful Paint (LCP)
  let lcpValue = 0;
  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1] as any;
    lcpValue = lastEntry.renderTime || lastEntry.loadTime;
  });

  try {
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    // LCP not supported
  }

  // Monitor First Input Delay (FID)
  let fidValue = 0;
  const fidObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      fidValue = (entry as any).processingStart - entry.startTime;
    }
  });

  try {
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // FID not supported
  }

  // Report metrics when page is about to unload
  const reportMetrics = () => {
    const metrics = {
      cls: clsValue,
      lcp: lcpValue,
      fid: fidValue,
      url: window.location.href,
      timestamp: Date.now()
    };

    // In production, you'd send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log('Core Web Vitals:', metrics);
    }

    // Check performance thresholds
    const warnings: string[] = [];
    if (clsValue > 0.1) warnings.push(`CLS is ${clsValue.toFixed(3)} (should be < 0.1)`);
    if (lcpValue > 2500) warnings.push(`LCP is ${lcpValue.toFixed(0)}ms (should be < 2500ms)`);
    if (fidValue > 100) warnings.push(`FID is ${fidValue.toFixed(0)}ms (should be < 100ms)`);

    if (warnings.length > 0) {
      console.warn('Performance issues detected:', warnings);
    }
  };

  // Report on page unload
  if ('onvisibilitychange' in document) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportMetrics();
      }
    });
  } else {
    window.addEventListener('beforeunload', reportMetrics);
  }

  // Also report after page load
  window.addEventListener('load', () => {
    setTimeout(reportMetrics, 5000);
  });
}

// Lazy load images with Intersection Observer
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
            img.classList.add('loaded');
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without Intersection Observer
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.dataset.src) {
        imgElement.src = imgElement.dataset.src;
        imgElement.removeAttribute('data-src');
      }
    });
  }
}

// Optimize critical rendering path
export function optimizeCriticalPath() {
  // Preconnect to external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Prefetch critical resources
  const prefetchResources = [
    '/api/health', // Warm up the API connection
  ];

  prefetchResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = resource;
    document.head.appendChild(link);
  });
}

// Mobile-specific optimizations
export function mobileOptimizations() {
  if (typeof window === 'undefined') return;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Disable hover effects on mobile
    document.body.classList.add('touch-device');

    // Add passive event listeners for better scroll performance
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassive = true;
          return true;
        }
      });
      window.addEventListener('testPassive', () => {}, opts);
      window.removeEventListener('testPassive', () => {}, opts);
    } catch (e) {}

    const passiveOption = supportsPassive ? { passive: true } : false;

    // Optimize touch events
    document.addEventListener('touchstart', () => {}, passiveOption);
    document.addEventListener('touchmove', () => {}, passiveOption);

    // Reduce motion for better performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduce-motion');
    }
  }
}

// Initialize all optimizations
export function initializeOptimizations() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLazyLoading();
      optimizeCriticalPath();
      mobileOptimizations();
      initPerformanceMonitoring();
    });
  } else {
    setupLazyLoading();
    optimizeCriticalPath();
    mobileOptimizations();
    initPerformanceMonitoring();
  }
}