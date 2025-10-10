import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const DEFAULT_TITLE = 'Whitebrd Co. - Digital Marketing Agency | SEO & Web Design';
const DEFAULT_DESCRIPTION = 'Whitebrd Co. is a full-service digital marketing agency specializing in SEO, web design, and growth strategies for HVAC, plumbing, roofing, legal, dental, SaaS, and e-commerce businesses. Get found online and grow your revenue.';
const DEFAULT_KEYWORDS = 'digital marketing agency, SEO services, web design, local SEO, content marketing, PPC advertising, HVAC marketing, plumbing marketing, roofing marketing, legal marketing, dental marketing, SaaS marketing, e-commerce marketing, website development, online marketing, search engine optimization';
const DEFAULT_OG_IMAGE = '/images/whitebrd-og-image.svg';
const SITE_URL = 'https://whitebrd.co';

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@whitebrdco',
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [type, value] = selector.includes('property=') 
          ? ['property', selector.match(/property="([^"]+)"/)?.[1]] 
          : ['name', selector.match(/name="([^"]+)"/)?.[1]];
        if (value) {
          element.setAttribute(type, value);
          document.head.appendChild(element);
        }
      }
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    
    // Robots meta tag
    const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('meta[name="robots"]', robotsContent);

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    updateMetaTag('meta[property="og:image"]', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`);
    updateMetaTag('meta[property="og:type"]', ogType);
    updateMetaTag('meta[property="og:url"]', canonicalUrl || window.location.href);
    updateMetaTag('meta[property="og:site_name"]', 'Whitebrd Co.');
    updateMetaTag('meta[property="og:locale"]', 'en_US');

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', twitterCard);
    updateMetaTag('meta[name="twitter:title"]', ogTitle || title);
    updateMetaTag('meta[name="twitter:description"]', ogDescription || description);
    updateMetaTag('meta[name="twitter:image"]', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`);
    updateMetaTag('meta[name="twitter:creator"]', twitterCreator);
    updateMetaTag('meta[name="twitter:site"]', '@whitebrdco');

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.setAttribute('data-seo-structured-data', 'true');
      document.head.appendChild(script);

      // Cleanup function to remove the script when component unmounts
      return () => {
        const existingScript = document.querySelector('script[data-seo-structured-data="true"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogType, twitterCard, twitterCreator, structuredData, noindex, nofollow]);

  return null;
}

// Default organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Whitebrd Co.",
  "url": "https://whitebrd.co",
  "logo": "https://whitebrd.co/images/logo.svg",
  "description": "Full-service digital marketing agency specializing in SEO, web design, and growth strategies for service businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hello@whitebrd.co"
  },
  "sameAs": [
    "https://twitter.com/whitebrdco",
    "https://linkedin.com/company/whitebrd",
    "https://facebook.com/whitebrdco"
  ],
  "knowsAbout": [
    "Search Engine Optimization",
    "Web Design",
    "Digital Marketing",
    "Content Marketing",
    "Local SEO",
    "PPC Advertising",
    "Conversion Rate Optimization"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve organic rankings and traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Custom website design and development optimized for conversions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO",
          "description": "Local search optimization for service area businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Marketing",
          "description": "Strategic content creation to attract and engage target audiences"
        }
      }
    ]
  }
};

// Service page structured data generator
export const createServiceSchema = (service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "MarketingAgency",
    "name": service.provider || "Whitebrd Co.",
    "url": "https://whitebrd.co"
  },
  "areaServed": service.areaServed || "United States",
  "url": service.url || window.location.href,
  "serviceType": "Digital Marketing"
});

// Blog post structured data generator
export const createArticleSchema = (article: {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  url?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author || "Whitebrd Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Whitebrd Co.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://whitebrd.co/images/logo.svg"
    }
  },
  "datePublished": article.datePublished || new Date().toISOString(),
  "dateModified": article.dateModified || new Date().toISOString(),
  "image": article.image || "https://whitebrd.co/images/default-blog-image.svg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url || window.location.href
  }
});

// FAQ structured data generator
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Local Business structured data for location pages
export const createLocalBusinessSchema = (business: {
  name: string;
  description: string;
  address?: string;
  telephone?: string;
  email?: string;
  url?: string;
  image?: string;
  priceRange?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": business.name,
  "description": business.description,
  "url": business.url || window.location.href,
  "telephone": business.telephone,
  "email": business.email,
  "address": business.address ? {
    "@type": "PostalAddress",
    "streetAddress": business.address
  } : undefined,
  "image": business.image,
  "priceRange": business.priceRange || "$$"
});
