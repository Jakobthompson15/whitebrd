import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: seoRef, isVisible: seoVisible } = useScrollAnimation();
  const { ref: ppcRef, isVisible: ppcVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-center mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* SEO Service */}
          <motion.div 
            ref={seoRef}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={seoVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-bebas text-3xl lg:text-4xl mb-6 tracking-wide">SEO</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We optimize your digital presence to dominate search results. Our strategic approach combines technical excellence with content mastery to ensure your brand appears exactly where your customers are looking.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <ul className="space-y-2 text-sm font-medium">
                <li>• Technical SEO Audits</li>
                <li>• Content Strategy & Optimization</li>
                <li>• Keyword Research & Analytics</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
          </motion.div>
          
          {/* PPC Service */}
          <motion.div 
            ref={ppcRef}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={ppcVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="font-bebas text-3xl lg:text-4xl mb-6 tracking-wide">PPC</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Precision-targeted advertising campaigns that deliver immediate results. We craft compelling ad experiences that convert browsers into buyers while maximizing your return on ad spend.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <ul className="space-y-2 text-sm font-medium">
                <li>• Google Ads Management</li>
                <li>• Social Media Advertising</li>
                <li>• Campaign Optimization</li>
                <li>• ROI Analysis & Reporting</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
