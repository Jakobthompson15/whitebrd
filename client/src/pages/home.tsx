import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WorkSection } from '@/components/work-section';
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
        title="Whitebrd Co. - Digital Marketing Agency | SEO & Web Design"
        description="Whitebrd Co. helps service businesses dominate online with proven SEO, web design, and digital marketing strategies. Specializing in HVAC, plumbing, roofing, legal, dental, SaaS, and e-commerce. Get found online and grow your revenue with data-driven marketing that works."
        keywords="digital marketing agency, SEO services, web design, local SEO, HVAC marketing, plumbing marketing, roofing marketing, legal marketing, dental marketing, SaaS marketing, e-commerce marketing, content marketing, PPC advertising, conversion optimization, website development"
        canonicalUrl="https://whitebrd.com/"
        ogTitle="Whitebrd Co. - Digital Marketing That Drives Results"
        ogDescription="Strategic digital marketing for service businesses. We help HVAC, plumbing, roofing, legal, dental, SaaS, and e-commerce companies dominate their markets online."
        structuredData={organizationSchema}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
