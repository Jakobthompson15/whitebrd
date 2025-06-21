import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 mb-4 block">
            Digital Marketing for Home Services
          </span>
        </motion.div>
        
        <motion.h1 
          className="font-marker text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Dominate Your Local<br />
          Home Services Market
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-600 font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          HVAC, Plumbing, Roofing, and Pest Control Markets
        </motion.h2>
        
        <motion.p 
          className="text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          We help HVAC, plumbing, roofing, and pest control contractors generate more qualified leads, 
          increase revenue, and grow their business with proven digital marketing strategies.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <button className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 border-2 border-black">
            Get More Leads Now
          </button>
          <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 border-2 border-black">
            View Case Studies
          </button>
        </motion.div>
        
        <motion.div
          className="mt-16 flex justify-center items-center space-x-8 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="font-bold text-2xl text-black">500+</div>
            <div>Contractors Served</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl text-black">$50M+</div>
            <div>Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl text-black">98%</div>
            <div>Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
