import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { industries } from '@/data/industries';
import { useLocation } from 'wouter';

export default function IndustriesIndex() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-4 block">
            Industries We Serve
          </span>
          <h1 className="font-marker text-5xl sm:text-6xl mb-6">Built for Your Business</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Select your industry to see a tailored plan. Don’t see yours? Our approach adapts across categories — let’s talk.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setLocation(`/industries/${ind.slug}`)}
              className="text-left border-2 border-black p-6 hover:shadow-lg transition-all group bg-white"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-marker-bold text-2xl group-hover:text-gray-700">{ind.name}</h3>
                <span className="text-gray-400 group-hover:text-black">→</span>
              </div>
              <p className="text-gray-700 text-sm">{ind.heroSubtitle}</p>
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

