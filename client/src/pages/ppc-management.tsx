import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiTarget, FiBarChart2, FiClock, FiAward } from 'react-icons/fi';
import { FaGoogle, FaMicrosoft, FaFacebook, FaAmazon } from 'react-icons/fa';

export default function PPCManagement() {
  const ppcServiceSchema = createServiceSchema({
    name: 'PPC Management Services',
    description: 'Professional PPC management services nationwide. Maximize ROI with expert Google Ads and Meta Ads campaigns.',
    url: 'https://whitebrd.co/ppc-management',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const platforms = [
    {
      icon: <FaGoogle className="w-12 h-12" />,
      name: "Google Ads",
      description: "Search, Display, Shopping, and YouTube campaigns"
    },
    {
      icon: <FaFacebook className="w-12 h-12" />,
      name: "Meta Ads",
      description: "Facebook and Instagram advertising"
    },
    {
      icon: <FaMicrosoft className="w-12 h-12" />,
      name: "Microsoft Ads",
      description: "Bing and Microsoft network campaigns"
    },
    {
      icon: <FaAmazon className="w-12 h-12" />,
      name: "Amazon Ads",
      description: "Sponsored products and brand campaigns"
    }
  ];

  const services = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Campaign Strategy",
      description: "Data-driven PPC strategies tailored to your business goals and target audience."
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Budget Optimization",
      description: "Maximize your ad spend efficiency with smart bidding and budget allocation."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Real-time monitoring and detailed reporting on all campaign metrics."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Conversion Optimization",
      description: "Landing page optimization and A/B testing to improve conversion rates."
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "24/7 Management",
      description: "Continuous campaign monitoring and optimization for maximum performance."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Certified Experts",
      description: "Google Partner certified team with proven expertise across all platforms."
    }
  ];

  const stats = [
    { value: "$50M+", label: "Ad Spend Managed" },
    { value: "3.5x", label: "Average ROAS" },
    { value: "45%", label: "Lower CPA" },
    { value: "200+", label: "Active Campaigns" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="PPC Management Services National | Whitebrd Co"
        description="Whitebrd Co specializes in PPC management services nationwide. From Google Ads to Meta Ads, we help you maximize ROI. Get started with us today!"
        keywords="ppc services, ppc management services, google ads management, facebook ads, instagram ads, paid advertising, pay per click, digital advertising, ppc campaigns"
        canonicalUrl="https://whitebrd.co/ppc-management"
        ogTitle="PPC Management Services National | Whitebrd Co"
        ogDescription="Expert PPC management services across the USA. Maximize your ROI with professional Google Ads and Meta Ads management."
        structuredData={ppcServiceSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              PPC Management Services for National Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Drive immediate results with expert PPC management services. We optimize every dollar of your ad spend to maximize ROI across Google Ads, Meta Ads, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Free PPC Audit
              </a>
              <a
                href="#platforms"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Multi-Platform PPC Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manage PPC campaigns across all major advertising platforms to reach your audience wherever they are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Comprehensive PPC Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your PPC campaigns for maximum performance.
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
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Our PPC Management Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Audit & Strategy</h3>
                    <p className="text-gray-600">Comprehensive audit of existing campaigns and development of optimization strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Campaign Setup</h3>
                    <p className="text-gray-600">Structure campaigns for maximum relevance and quality scores.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Launch & Monitor</h3>
                    <p className="text-gray-600">Launch campaigns with continuous monitoring and real-time adjustments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Optimize & Scale</h3>
                    <p className="text-gray-600">Ongoing optimization and scaling of successful campaigns for growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Start Your PPC Campaign</h3>
              <p className="text-gray-600 mb-6">
                Get a free PPC audit and see how we can improve your campaign performance and ROI.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                  <option>Monthly Ad Budget</option>
                  <option>Under $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>Over $50,000</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Free PPC Audit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Maximize Your PPC ROI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses achieving 3x+ ROAS with our expert PPC management services.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/jakob-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}