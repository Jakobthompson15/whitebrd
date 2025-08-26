import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const services = [
    {
      title: "Local SEO",
      description: "Own your backyard when customers search for businesses like yours. We optimize your Google Business Profile, local citations, and location pages to capture intent.",
      features: [
        "Google Business Profile Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Keyword Targeting"
      ]
    },
    {
      title: "National SEO",
      description: "Expand reach beyond local markets with national SEO that scales across products, services, and regions while building authority and demand.",
      features: [
        "Multi-Location SEO Strategy",
        "Commercial Keyword Targeting",
        "Enterprise Client Acquisition",
        "National Brand Authority Building"
      ]
    },
    {
      title: "Website Design",
      description: "Fast, accessible, conversion-first websites engineered for performance, search, and brand credibility — designed to turn visitors into customers.",
      features: [
        "SEO-Optimized Architecture",
        "Service Area Landing Pages",
        "Conversion-Focused Design",
        "Mobile-First Performance"
      ]
    },

  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-4 block">
            What We Do
          </span>
          <h2 className="font-marker text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to acquire and retain customers across industries
          </p>
        </motion.div>
        
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white p-8 border-2 border-black hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <h3 className="font-marker-bold text-2xl mb-4 tracking-wide group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-black mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={servicesVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border-2 border-black">
            Get Your Free Strategy Session
          </button>
        </motion.div>
      </div>
    </section>
  );
}
