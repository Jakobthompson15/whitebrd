import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FiUsers, FiMessageCircle, FiCalendar, FiBarChart, FiTarget, FiTrendingUp } from 'react-icons/fi';

export default function SocialMediaManagement() {
  const socialMediaSchema = createServiceSchema({
    name: 'Social Media Management Services',
    description: 'Professional social media management and advertising services nationwide. Facebook, Instagram, and Meta ads management.',
    url: 'https://whitebrd.co/social-media-management',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const platforms = [
    { icon: <FaFacebook className="w-8 h-8" />, name: "Facebook" },
    { icon: <FaInstagram className="w-8 h-8" />, name: "Instagram" },
    { icon: <FaLinkedin className="w-8 h-8" />, name: "LinkedIn" },
    { icon: <FaTwitter className="w-8 h-8" />, name: "Twitter/X" },
    { icon: <FaTiktok className="w-8 h-8" />, name: "TikTok" },
    { icon: <FaYoutube className="w-8 h-8" />, name: "YouTube" }
  ];

  const services = [
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Content Planning & Creation",
      description: "Strategic content calendars and professional content creation tailored to each platform."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community Management",
      description: "Active engagement with your audience to build relationships and brand loyalty."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Meta Ads Manager",
      description: "Expert Facebook and Instagram advertising services to reach your target audience."
    },
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Connect with relevant influencers to amplify your brand message and reach."
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and monthly reports with actionable insights."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Growth Strategies",
      description: "Data-driven strategies to grow your following and increase engagement rates."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Social Media Management National | Whitebrd Co"
        description="Whitebrd Co provides social media management, including Facebook advertising services and Instagram advertising services nationwide. Call us today!"
        keywords="meta ads manager, facebook advertising services, instagram advertising services, content marketing strategy, social media management, social media marketing, social media advertising"
        canonicalUrl="https://whitebrd.co/social-media-management"
        ogTitle="Social Media Management National | Whitebrd Co"
        ogDescription="Expert social media management and advertising services nationwide. Facebook, Instagram, and comprehensive social media strategies."
        structuredData={socialMediaSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Social Media Management & Advertising Services Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build your brand, engage your audience, and drive conversions with expert social media management and Meta ads services across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Social Media Audit
              </a>
              <a
                href="#services"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </motion.div>

          {/* Platform Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 flex flex-col items-center">
                  {platform.icon}
                  <span className="text-sm mt-2 text-gray-600">{platform.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Comprehensive Social Media Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From organic growth to paid advertising, we manage every aspect of your social media presence.
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
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Ads Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Expert Meta Ads Management
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Maximize your ROI with professional Facebook and Instagram advertising services:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Advanced audience targeting and segmentation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Creative ad design and copywriting
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  A/B testing and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Retargeting campaigns for maximum conversion
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Real-time performance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">✓</span>
                  Monthly reporting and strategy adjustments
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Meta Ads Results</h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-3">
                  <div className="text-3xl font-bold">2.8x</div>
                  <div className="text-sm opacity-80">Average ROAS</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-sm opacity-80">Lower Cost Per Acquisition</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-3xl font-bold">325%</div>
                  <div className="text-sm opacity-80">Increase in Conversions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$25M+</div>
                  <div className="text-sm opacity-80">Ad Spend Managed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Ready to Elevate Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join hundreds of brands achieving remarkable growth with our social media management and advertising services.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/jakob-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}