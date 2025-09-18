import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiZap, FiCode, FiLayers, FiShield } from 'react-icons/fi';

export default function WebsiteDesign() {
  const websiteDesignSchema = createServiceSchema({
    name: 'Website Design Services',
    description: 'Custom website design services nationwide. Professional, conversion-focused websites that drive results.',
    url: 'https://whitebrd.co/website-design',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Custom Website Design",
      description: "Unique, branded designs tailored to your business identity and target audience."
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Responsive Development",
      description: "Mobile-first websites that look and perform perfectly on all devices and screen sizes."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimized performance for better user experience and SEO."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "Built with cutting-edge frameworks and technologies for scalability and maintainability."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "CMS Integration",
      description: "Easy content management systems that empower you to update your website effortlessly."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security & Reliability",
      description: "Secure, reliable websites with SSL certificates, regular backups, and monitoring."
    }
  ];

  const portfolio = [
    { industry: "E-Commerce", metric: "+245% Conversion Rate" },
    { industry: "Healthcare", metric: "+180% Online Appointments" },
    { industry: "Legal Services", metric: "+320% Lead Generation" },
    { industry: "Home Services", metric: "+425% Service Requests" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Website Design Services National | Whitebrd Co"
        description="Whitebrd Co provides custom website design services across the USA. Elevate your online presence with our expert website designers. Contact us today!"
        keywords="website design, custom website design, website designer, web development, responsive design, UX design, UI design, website redesign, professional website, business website"
        canonicalUrl="https://whitebrd.co/website-design"
        ogTitle="Website Design Services National | Whitebrd Co"
        ogDescription="Custom website design services nationwide. Professional, conversion-focused websites that drive results."
        structuredData={websiteDesignSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Custom Website Design Services in the USA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your online presence with professional website design that converts visitors into customers. Our expert website designers create stunning, high-performing websites nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio"
                className="bg-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Our Portfolio
              </a>
              <a
                href="#connect"
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Complete Website Design & Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we handle every aspect of your website design project with expertise and attention to detail.
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
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Metrics */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our custom website designs deliver measurable results for businesses nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {item.industry}
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {item.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Our Website Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven process that ensures your website project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements" },
              { step: "02", title: "Design", desc: "Creating mockups and getting your approval" },
              { step: "03", title: "Development", desc: "Building your website with clean, optimized code" },
              { step: "04", title: "Launch", desc: "Testing, optimization, and going live" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a website that sets you apart from the competition and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings-na2.hubspot.com/jakob-thompson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}