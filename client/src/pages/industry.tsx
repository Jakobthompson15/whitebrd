import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { industryBySlug, industries } from '@/data/industries';
import { useLocation } from 'wouter';

type Props = { slug: string };

export default function IndustryPage({ slug }: Props) {
  const [, setLocation] = useLocation();
  const ind = industryBySlug[slug];

  if (!ind) {
    // If unknown slug, bounce to industries index
    setLocation('/industries');
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <header className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">{ind.name}</p>
          <h1 className="font-marker text-5xl sm:text-6xl mb-4">{ind.heroTitle}</h1>
          <p className="text-xl text-gray-700 max-w-3xl">{ind.heroSubtitle}</p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="max-w-6xl mx-auto py-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 text-lg leading-relaxed">{ind.description}</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {ind.keyServices.map((s) => (
                <div key={s} className="border-2 border-black p-4">
                  <span className="block font-semibold">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => setLocation('/#connect')}
                className="bg-black text-white px-6 py-3 font-semibold border-2 border-black hover:bg-gray-800 transition"
              >
                {ind.cta}
              </button>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border-2 border-black p-6">
              <h3 className="font-marker-bold text-xl mb-2">Also Explore</h3>
              <ul className="list-none space-y-2">
                {industries
                  .filter((i) => i.slug !== slug)
                  .slice(0, 5)
                  .map((i) => (
                    <li key={i.slug}>
                      <button
                        onClick={() => setLocation(`/industries/${i.slug}`)}
                        className="text-left text-gray-700 hover:text-black underline"
                      >
                        {i.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="border-2 border-black p-6">
              <h3 className="font-marker-bold text-xl mb-2">What You Get</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Complete digital audit</li>
                <li>Competitor and market analysis</li>
                <li>12‑week prioritized roadmap</li>
                <li>Clear KPIs and tracking setup</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
