import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WorkSection } from '@/components/work-section';
import { ConnectSection } from '@/components/connect-section';
import { Footer } from '@/components/footer';

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
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
