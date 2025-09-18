import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ConnectSection } from '@/components/connect-section';
import { Footer } from '@/components/footer';
import { SEO, organizationSchema } from '@/components/seo';

export default function Home() {
  useEffect(() => {
    // Support deep linking like "/#connect" by scrolling to the section after mount
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Digital Marketing Agency National | Whitebrd Co"
        description="Whitebrd Co offers digital marketing services nationwide. From SEO to PPC, our digital marketing agency drives growth for your business. Contact us today!"
        keywords="digital marketing, digital marketing agency, digital marketing company, digital marketing services, digital marketing solutions, SEO services, web design, local SEO, HVAC marketing, plumbing marketing, roofing marketing, legal marketing, dental marketing, SaaS marketing, e-commerce marketing, content marketing, PPC advertising, conversion optimization, website development"
        canonicalUrl="https://whitebrd.co/"
        ogTitle="Digital Marketing Agency National | Whitebrd Co"
        ogDescription="Whitebrd Co offers digital marketing services nationwide. From SEO to PPC, our digital marketing agency drives growth for your business."
        structuredData={organizationSchema}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
