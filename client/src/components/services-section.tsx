import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useState } from 'react';
import { CheckCircle, ArrowRight, TrendingUp, Globe, Code, Target, Users, Search } from 'lucide-react';

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      title: "Local SEO",
      subtitle: "Dominate Your Local Market",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Own your backyard when customers search for businesses like yours. We optimize your Google Business Profile, local citations, and location pages to capture intent and drive foot traffic.",
      features: [
        "Google Business Profile Optimization",
        "Local Citation Building & Management",
        "Review Generation & Management",
        "Local Keyword Strategy & Implementation",
        "Location-Based Landing Pages",
        "Local Link Building Campaigns"
      ],
      results: "Average 150% increase in local visibility within 3 months"
    },
    {
      id: 1,
      title: "National SEO",
      subtitle: "Scale Beyond Local Markets",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      description: "Expand reach beyond local markets with national SEO that scales across products, services, and regions while building authority and demand at enterprise level.",
      features: [
        "Multi-Location SEO Strategy",
        "Commercial Keyword Targeting",
        "Enterprise Client Acquisition",
        "National Brand Authority Building",
        "Content Marketing at Scale",
        "Technical SEO Infrastructure"
      ],
      results: "Average 200% increase in organic traffic within 6 months"
    },
    {
      id: 2,
      title: "Website Design",
      subtitle: "Convert Visitors to Customers", 
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      description: "Fast, accessible, conversion-first websites engineered for performance, search, and brand credibility — designed to turn visitors into customers with data-driven UX.",
      features: [
        "SEO-Optimized Architecture",
        "Service Area Landing Pages",
        "Conversion-Focused Design",
        "Mobile-First Performance",
        "Advanced Analytics Integration",
        "A/B Testing & Optimization"
      ],
      results: "Average 75% improvement in conversion rates"
    },
    {
      id: 3,
      title: "PPC Services",
      subtitle: "Drive Immediate Results",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      description: "Drive immediate results with strategic PPC campaigns across all platforms. Complete management from setup to optimization for maximum ROI.",
      features: [
        "Multi-Platform Campaign Management",
        "Search, Display & Video Advertising",
        "Professional Ad Copy & Creative",
        "Advanced A/B Testing & Optimization",
        "Complete Setup & Ongoing Management"
      ],
      results: "Average 300% ROI on ad spend within 60 days"
    },
    {
      id: 4,
      title: "Meta Ads Campaigns",
      subtitle: "Scale on Social Platforms",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-700",
      description: "Scale your business on Facebook and Instagram with precision targeting and compelling creative. Full-service social advertising management.",
      features: [
        "Facebook & Instagram Advertising",
        "Advanced Audience Targeting & Lookalikes",
        "Lead Generation & Conversion Campaigns",
        "Dynamic Creative & A/B Testing",
        "Weekly Optimization & Performance Management"
      ],
      results: "Average 250% increase in qualified leads from social"
    },
    {
      id: 5,
      title: "Google Ads Campaigns",
      subtitle: "Dominate Search Results",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-600 to-blue-600",
      description: "Dominate Google search results and capture high-intent customers. Complete campaign management with advanced optimization and tracking.",
      features: [
        "Search, Shopping & Performance Max Campaigns",
        "Advanced Keyword Research & Optimization",
        "YouTube & Display Network Advertising",
        "Smart Bidding & Budget Management",
        "Comprehensive Reporting & Analytics"
      ],
      results: "Average 280% increase in conversion volume within 90 days"
    }
  ];

  const openCalendarBooking = () => {
    window.open('https://meetings-na2.hubspot.com/jakob-thompson?uuid=ac532047-5668-4f28-85e8-c4c73d0a3a15', '_blank');
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
          <g fill="none" fillRule="evenodd">
            <g fill="black" fillOpacity="0.1">
              <circle cx="3" cy="3" r="1"/>
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white text-sm font-semibold tracking-wider uppercase mb-6 rounded-full"
            initial={{ scale: 0 }}
            animate={titleVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What We Do
          </motion.span>
          <h2 className="font-marker text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions to acquire and retain customers across industries
          </p>
        </motion.div>

        <div ref={servicesRef} className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12 bg-white/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center space-x-2 px-4 py-3 mx-1 mb-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === index
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={servicesVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {activeTab === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl`}
                    layoutId="activeServiceTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  {service.icon}
                  <span className="hidden md:inline">{service.title}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12">
                  <motion.div
                    className={`inline-flex items-center space-x-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${services[activeTab].color} text-white`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {services[activeTab].icon}
                    <span className="font-semibold">{services[activeTab].title}</span>
                  </motion.div>
                  
                  <motion.h3 
                    className="font-marker text-3xl lg:text-4xl mb-4 text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {services[activeTab].subtitle}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-700 leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {services[activeTab].description}
                  </motion.p>

                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${services[activeTab].color} text-white rounded-lg font-semibold mb-4`}>
                      🎯 Proven Results
                    </div>
                    <p className="text-gray-700 font-medium">
                      {services[activeTab].results}
                    </p>
                  </motion.div>
                </div>

                {/* Right Side - Features */}
                <div className={`bg-gradient-to-br ${services[activeTab].color} p-8 lg:p-12`}>
                  <motion.h4 
                    className="text-white font-bold text-xl mb-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    What's Included:
                  </motion.h4>
                  <div className="space-y-4">
                    {services[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            onClick={openCalendarBooking}
            className="group bg-gradient-to-r from-gray-900 to-black text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Get Your Free Strategy Session</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}