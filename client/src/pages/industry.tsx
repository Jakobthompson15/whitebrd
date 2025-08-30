import { useEffect } from 'react';
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

  // Basic SEO handling similar to blog page
  useEffect(() => {
    const fallbackTitle = `${ind.name} Marketing Agency | Whitebrd`;
    const title = ind.metaTitle || fallbackTitle;
    const description = ind.metaDescription || ind.description;

    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [ind]);

  const defaultProcess = [
    'Discovery: goals, audience, and competitive landscape',
    'Foundations: tracking, reviews, and local profiles',
    'Build: high‑intent pages and conversion paths',
    'Launch: content, outreach, and local signals',
    'Optimize: CRO, rankings, and expansion opportunities',
  ];

  const defaultPainPoints = [
    'Inconsistent lead flow',
    'Low local visibility (Maps/organic)',
    'Pages that don’t convert',
    'Gaps in tracking and ROI clarity',
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <header className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">{ind.name}</p>
            <h1 className="font-marker text-5xl sm:text-6xl mb-4">{ind.heroTitle}</h1>
            <p className="text-xl text-gray-700 max-w-3xl">{ind.heroSubtitle}</p>
          </div>
          <div className="hidden lg:block">
            {ind.heroImage ? (
              <img
                src={ind.heroImage}
                alt={`${ind.name} hero`}
                className="w-full h-48 object-cover border-2 border-black"
                loading="eager"
              />
            ) : (
              <div className="w-full h-48 border-2 border-black bg-white flex items-center justify-center text-gray-500">
                <span>—</span>
              </div>
            )}
          </div>
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

            {/* SEO Content Section */}
            {ind.seoContent && (
              <div className="mt-12">
                <h2 className="font-marker-bold text-3xl mb-4">{ind.seoContent.title}</h2>
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-gray-800 leading-relaxed">{ind.seoContent.description}</p>
                </div>
                <div className="space-y-4">
                  {ind.seoContent.benefits.map((benefit, index) => (
                    <div key={index} className="border-l-4 border-black pl-4">
                      <p className="text-gray-800 leading-relaxed text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Website Design Content Section */}
            {ind.designContent && (
              <div className="mt-12">
                <h2 className="font-marker-bold text-3xl mb-4">{ind.designContent.title}</h2>
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-gray-800 leading-relaxed">{ind.designContent.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {ind.designContent.features.map((feature, index) => (
                    <div key={index} className="border-2 border-black p-4 bg-gray-50">
                      <p className="text-gray-800 text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases */}
            {ind.useCases && ind.useCases.length > 0 && (
              <div className="mt-12">
                <h2 className="font-marker-bold text-3xl mb-4">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {ind.useCases.map((u) => (
                    <div key={u.title} className="border-2 border-black p-5 bg-white">
                      <div className="font-semibold mb-1">{u.title}</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{u.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pain Points */}
            {(ind.painPoints && ind.painPoints.length > 0) || defaultPainPoints.length > 0 ? (
              <div className="mt-12">
                <h2 className="font-marker-bold text-3xl mb-4">Common Challenges</h2>
                <ul className="grid sm:grid-cols-2 gap-3 list-none">
                  {(ind.painPoints && ind.painPoints.length > 0 ? ind.painPoints : defaultPainPoints).map((p) => (
                    <li key={p} className="border-2 border-black p-4 text-gray-800">{p}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Process */}
            {(ind.process && ind.process.length > 0) || defaultProcess.length > 0 ? (
              <div className="mt-12">
                <h2 className="font-marker-bold text-3xl mb-4">Our Process</h2>
                <ol className="list-decimal ml-6 space-y-2 text-gray-800">
                  {(ind.process && ind.process.length > 0 ? ind.process : defaultProcess).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ) : null}

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

            {/* Hero Image Prompt */}
            {ind.heroImagePrompt && (
              <div className="border-2 border-black p-6">
                <h3 className="font-marker-bold text-xl mb-2">Recommended Imagery</h3>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  For best visual impact: {ind.heroImagePrompt}
                </p>
              </div>
            )}

            {/* FAQs */}
            {ind.faqs && ind.faqs.length > 0 && (
              <div className="border-2 border-black p-6">
                <h3 className="font-marker-bold text-xl mb-2">FAQs</h3>
                <div className="space-y-4">
                  {ind.faqs.map((f) => (
                    <details key={f.q} className="group">
                      <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                        <span>{f.q}</span>
                        <span className="text-gray-500 group-open:rotate-90 transition">›</span>
                      </summary>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
