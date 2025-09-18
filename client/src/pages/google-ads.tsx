import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import { FiSearch, FiShoppingBag, FiMonitor, FiVideo, FiMap, FiTarget } from 'react-icons/fi';

export default function GoogleAdsManagement() {
  const googleAdsSchema = createServiceSchema({
    name: 'Google Ads Management Services',
    description: 'Professional Google Ads management services nationwide. Maximize ROI with expert PPC campaigns.',
    url: 'https://whitebrd.co/google-ads',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const campaignTypes = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Search Campaigns",
      description: "Target high-intent keywords to capture customers actively searching for your services."
    },
    {
      icon: <FiShoppingBag className="w-8 h-8" />,
      title: "Shopping Campaigns",
      description: "Showcase your products with visual ads that drive e-commerce sales."
    },
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Display Network",
      description: "Build brand awareness with visual ads across millions of websites."
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "YouTube Ads",
      description: "Engage audiences with video ads on the world's second-largest search engine."
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: "Local Campaigns",
      description: "Drive foot traffic and calls to your local business locations."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Performance Max",
      description: "AI-powered campaigns that optimize across all Google channels."
    }
  ];

  const benefits = [
    { metric: "3.2x", label: "Average ROAS" },
    { metric: "52%", label: "Lower CPC" },
    { metric: "285%", label: "Increase in Conversions" },
    { metric: "97%", label: "Client Retention Rate" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Google Ads Management Services National | Whitebrd Co"
        description="Maximize ROI with Whitebrd Co's Google Ads management services nationwide. Expert PPC strategy and optimization for growth. Get started today!"
        keywords="google ads management services, google ads campaigns, google ppc, google advertising, search ads, shopping ads, youtube ads, display ads"
        canonicalUrl="https://whitebrd.co/google-ads"
        ogTitle="Google Ads Management Services National | Whitebrd Co"
        ogDescription="Expert Google Ads management services nationwide. Maximize your ROI with professional PPC campaigns."
        structuredData={googleAdsSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <div className="flex justify-center mb-6">
              <FaGoogle className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Google Ads Management Services for National Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Drive immediate results with expert Google Ads management. We optimize every aspect of your campaigns to maximize ROI and accelerate business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Get Free Google Ads Audit
              </a>
              <a
                href="#campaigns"
                className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-red-50 transition-colors"
              >
                View Campaign Types
              </a>
            </div>
          </motion.div>

          {/* Benefits Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-red-600">{benefit.metric}</div>
                <div className="text-gray-600 mt-1">{benefit.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Campaign Types */}
      <section id="campaigns" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Full-Spectrum Google Ads Campaigns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manage all types of Google Ads campaigns to reach your customers at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-red-600 mb-4">{campaign.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{campaign.title}</h3>
                <p className="text-gray-600">{campaign.description}</p>
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
                Our Google Ads Management Process
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We follow a proven methodology to ensure your Google Ads campaigns deliver maximum ROI:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiTarget className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Strategic Planning</h3>
                    <p className="text-gray-600">Define goals, audiences, and campaign structure</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiSearch className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Keyword Research</h3>
                    <p className="text-gray-600">Identify high-value, low-competition keywords</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiMonitor className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Campaign Creation</h3>
                    <p className="text-gray-600">Build optimized campaigns with compelling ad copy</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FiTarget className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Continuous Optimization</h3>
                    <p className="text-gray-600">A/B testing, bid adjustments, and performance tuning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Google Ads Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  Google Partner certified team
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  $50M+ in managed ad spend
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  Advanced bid strategies and automation
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  Custom landing page optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  Transparent reporting and communication
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  No long-term contracts required
                </li>
              </ul>
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Campaign
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Dominate Google Ads?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free audit and discover how we can improve your Google Ads performance and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings-na2.hubspot.com/jakob-thompson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Google Ads Audit
            </a>
            <a
              href="tel:+1234567890"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
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