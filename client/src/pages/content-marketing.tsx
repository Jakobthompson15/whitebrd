import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SEO, createServiceSchema } from '@/components/seo';
import { motion } from 'framer-motion';
import { FiEdit3, FiUsers, FiTrendingUp, FiFileText, FiVideo, FiMail } from 'react-icons/fi';

export default function ContentMarketing() {
  const contentMarketingSchema = createServiceSchema({
    name: 'Content Marketing Services',
    description: 'Strategic content marketing services nationwide. Build your brand and drive engagement with proven content strategies.',
    url: 'https://whitebrd.co/content-marketing',
    areaServed: 'United States'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Comprehensive content marketing strategy aligned with your business goals and audience needs."
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Blog & Article Writing",
      description: "SEO-optimized blog posts and articles that educate, engage, and convert your audience."
    },
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Video Content",
      description: "Engaging video content for social media, websites, and marketing campaigns."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Social Media Content",
      description: "Platform-specific content that builds community and drives engagement."
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Compelling email campaigns that nurture leads and drive conversions."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Content Distribution",
      description: "Strategic content distribution across channels for maximum reach and impact."
    }
  ];

  const results = [
    { metric: "325%", description: "Average increase in organic traffic" },
    { metric: "85%", description: "Higher engagement rates" },
    { metric: "4x", description: "More qualified leads generated" },
    { metric: "250%", description: "Boost in social media reach" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <SEO
        title="Content Marketing Services National | Whitebrd Co"
        description="Whitebrd Co delivers content marketing services nationwide. Build your brand and drive engagement with our proven content marketing strategies. Call today!"
        keywords="content marketing services, content marketing strategy, seo content marketing, blog writing, content creation, content distribution, email marketing, social media content"
        canonicalUrl="https://whitebrd.co/content-marketing"
        ogTitle="Content Marketing Services National | Whitebrd Co"
        ogDescription="Strategic content marketing services nationwide. Build your brand and drive engagement with proven content strategies."
        structuredData={contentMarketingSchema}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Content Marketing Services for Businesses Nationwide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Elevate your brand with strategic content marketing that engages your audience, builds authority, and drives measurable results across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://meetings-na2.hubspot.com/jakob-thompson"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Content Strategy Consultation
              </a>
              <a
                href="#services"
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Content That Delivers Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our content marketing strategies consistently deliver measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Full-Service Content Marketing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your content marketing to drive growth.
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
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Content That Connects and Converts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We create diverse content types tailored to your audience's preferences and your business objectives:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>SEO-optimized blog posts and articles</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Engaging social media content</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Compelling video scripts and production</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Email marketing campaigns</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>White papers and case studies</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Infographics and visual content</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Podcast scripts and show notes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <span>Landing page copy</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Content Process</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">1. Research & Strategy</h4>
                  <p className="text-sm text-gray-600 mt-1">Deep dive into your industry, audience, and competitors</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">2. Content Creation</h4>
                  <p className="text-sm text-gray-600 mt-1">Expert writers and creators develop engaging content</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">3. Optimization</h4>
                  <p className="text-sm text-gray-600 mt-1">SEO and conversion optimization for maximum impact</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">4. Distribution</h4>
                  <p className="text-sm text-gray-600 mt-1">Strategic distribution across relevant channels</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">5. Analysis & Iteration</h4>
                  <p className="text-sm text-gray-600 mt-1">Performance tracking and continuous improvement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transform Your Content Marketing Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a content strategy that drives real business results and sets you apart from the competition.
          </p>
          <a
            href="https://meetings-na2.hubspot.com/jakob-thompson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Content Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}