import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiSearch, FiTarget, FiGlobe, FiMapPin } from 'react-icons/fi';

export default function SEOServices() {
  const seoServiceSchema = createServiceSchema({
    name: 'SEO Services',
    description: 'Expert SEO services nationwide. Boost visibility and drive organic traffic with our proven digital marketing strategies.',
    url: 'https://whitebrd.co/seo-services',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword research to target high-value search terms your customers are using."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "On-Page Optimization",
      description: "Optimize every element of your website for maximum search engine visibility and user experience."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "National SEO",
      description: "Expand your reach across the entire United States with comprehensive national SEO strategies."
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Multi-Location SEO",
      description: "Specialized SEO for businesses with multiple locations to dominate local search in every market."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Link Building & Authority",
      description: "Build high-quality backlinks and establish your website as an authority in your industry."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Monthly reporting and analytics to track your SEO progress and ROI."
    }
  ];

  const benefits = [
    "Increase organic traffic by 150%+ within 6 months",
    "Rank for high-value keywords in your industry",
    "Generate more qualified leads from search",
    "Build long-term sustainable growth",
    "Outrank your competition nationally",
    "Improve website conversion rates"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="SEO Services National | Whitebrd Co"
        description="Boost visibility with Whitebrd Co's SEO services nationwide. Our digital marketing company delivers strategies to get you ranked higher. Call today!"
        keywords="seo digital marketing, seo services, national seo, national seo services, multi location seo, search engine optimization, organic search, keyword research, on-page seo, off-page seo, link building"
        canonicalUrl="https://whitebrd.co/seo-services"
        ogTitle="SEO Services National | Whitebrd Co"
        ogDescription="Expert SEO services across the USA. Boost your visibility and drive organic traffic with proven strategies."
        structuredData={seoServiceSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Expert SEO Services Across the Nation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Drive organic traffic, increase visibility, and dominate search results with our comprehensive SEO digital marketing solutions designed for national and multi-location businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#connect"
                className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Your Free SEO Audit
              </a>
              <a
                href="#services"
                className="bg-white text-black border-2 border-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Our SEO Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Comprehensive SEO Services for National Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From technical optimization to content strategy, we provide full-spectrum SEO services to help you dominate search results nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Whitebrd Co for National SEO Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just another SEO agency. We're your strategic partner in digital growth, combining technical expertise with creative strategy to deliver measurable results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your online presence? Let's discuss your SEO goals and create a custom strategy for your business.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Tell us about your SEO goals"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Request Free SEO Audit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have transformed their online presence with our national SEO services.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/jakob-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}