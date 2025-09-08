import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoBackground } from './video-background';
import { FloatingElements } from './floating-elements';
import { useRef } from 'react';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
  const openCalendarBooking = () => {
    window.open('https://meetings-na2.hubspot.com/jakob-thompson?uuid=ac532047-5668-4f28-85e8-c4c73d0a3a15', '_blank');
  };


  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Video Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <VideoBackground />
      </motion.div>
      
      {/* Floating Elements */}
      <FloatingElements />
      
      <motion.div 
        className="max-w-6xl mx-auto text-center relative z-10"
        style={{ opacity }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold tracking-wider uppercase text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Strategic Digital Marketing for Growth
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="font-marker text-5xl sm:text-6xl lg:text-8xl mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white animate-gradient">
            Dominate Your Market
          </span>
          <br />
          <span className="text-white">
            Online and Offline
          </span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-200 font-bold relative inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Local, National, and E‑Commerce Growth Programs
        </motion.h2>
        
        <motion.p 
          className="text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          We help service businesses, professional firms, SaaS, retail, and e‑commerce brands generate qualified demand, 
          increase revenue, and build durable growth with proven, data‑driven marketing.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.button 
            onClick={openCalendarBooking}
            className="bg-gradient-to-r from-black to-gray-900 text-white px-10 py-5 text-lg font-semibold rounded-lg relative overflow-hidden group cursor-pointer shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Schedule Your Free Marketing Audit
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-200%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
        
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div 
            className="text-center px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="font-bold text-3xl text-white mb-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              500+
            </motion.div>
            <div className="text-gray-300">Businesses Served</div>
          </motion.div>
          <motion.div 
            className="text-center px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="font-bold text-3xl text-white mb-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              $2M+
            </motion.div>
            <div className="text-gray-300">Revenue Generated</div>
          </motion.div>
          <motion.div 
            className="text-center px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="font-bold text-3xl text-white mb-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            >
              98%
            </motion.div>
            <div className="text-gray-300">Client Retention</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
