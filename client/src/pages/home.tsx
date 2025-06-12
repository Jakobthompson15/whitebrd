import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WorkSection } from '@/components/work-section';
import { ConnectSection } from '@/components/connect-section';
import { Footer } from '@/components/footer';

export default function Home() {
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
