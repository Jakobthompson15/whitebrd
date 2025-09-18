import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiSettings, FiZap, FiShield, FiCode, FiDatabase, FiActivity } from 'react-icons/fi';

export default function TechnicalSEO() {
  const technicalSEOSchema = createServiceSchema({
    name: 'Technical SEO Services',
    description: 'Expert technical SEO services nationwide. Optimize your website infrastructure for maximum search engine performance.',
    url: 'https://whitebrd.co/seo-tech',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Site Speed Optimization",
      description: "Improve page load times, Core Web Vitals, and overall site performance for better rankings."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Schema Markup",
      description: "Implement structured data to help search engines understand and display your content better."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security & HTTPS",
      description: "Ensure your website is secure with SSL certificates and proper security protocols."
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "XML Sitemaps",
      description: "Create and optimize XML sitemaps for efficient crawling and indexing."
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "Crawlability & Indexation",
      description: "Fix crawl errors, optimize robots.txt, and ensure proper indexation of your pages."
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Site Architecture",
      description: "Optimize URL structure, internal linking, and site hierarchy for maximum SEO impact."
    }
  ];

  const audits = [
    "Page speed and Core Web Vitals analysis",
    "Mobile-friendliness assessment",
    "Crawlability and indexation audit",
    "Duplicate content identification",
    "Broken links and redirect chains",
    "Schema markup implementation",
    "Security and HTTPS configuration",
    "International SEO setup"
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Technical SEO Services National | Whitebrd Co"
        description="Enhance rankings with Whitebrd Co's technical SEO services nationwide. Our team delivers technical SEO solutions to boost site performance. Contact us today!"
        keywords="technical seo services, top digital marketing agencies, technical seo, site speed optimization, schema markup, core web vitals, crawlability, indexation"
        canonicalUrl="https://whitebrd.co/seo-tech"
        ogTitle="Technical SEO Services National | Whitebrd Co"
        ogDescription="Expert technical SEO services across the USA. Optimize your website's technical foundation for maximum search performance."
        structuredData={technicalSEOSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Expert Technical SEO Services Across the USA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maximize your search visibility with comprehensive technical SEO services. We optimize your website's infrastructure for peak performance and rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Free Technical SEO Audit
              </a>
              <a
                href="#services"
                className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Our Services
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
              Comprehensive Technical SEO Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From site speed to schema markup, we handle every technical aspect to ensure your website performs at its best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Comprehensive Technical SEO Audit
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our technical SEO audit identifies and fixes issues that are holding your website back from achieving top rankings.
              </p>
              <ul className="space-y-3">
                {audits.map((audit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{audit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical SEO Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Page Speed Score</span>
                    <span className="font-bold text-indigo-600">+65%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Mobile Usability</span>
                    <span className="font-bold text-indigo-600">+80%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Crawl Efficiency</span>
                    <span className="font-bold text-indigo-600">+90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Index Coverage</span>
                    <span className="font-bold text-indigo-600">+75%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Your Free Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Whitebrd Co for Technical SEO?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              We're among the top digital marketing agencies specializing in technical SEO excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Technical Audits Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring & Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Fix Your Technical SEO Issues?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a comprehensive technical SEO audit and unlock your website's full potential.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/jakob-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Free Technical Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}