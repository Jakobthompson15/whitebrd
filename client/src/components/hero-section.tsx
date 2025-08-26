import { motion } from 'framer-motion';
import { VideoBackground } from './video-background';

export function HeroSection() {
  const scrollToConnect = () => {
    const element = document.getElementById('connect');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-white mb-4 block">
            Strategic Digital Marketing for Growth
          </span>
        </motion.div>
        
        <motion.h1 
          className="font-marker text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Dominate Your Market<br />
          Online and Offline
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-200 font-bold"
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
            onClick={scrollToConnect}
            className="bg-black text-white px-8 py-4 text-lg font-semibold border-2 border-black relative overflow-hidden group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Get More Leads Now
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            onClick={scrollToWork}
            className="bg-white text-black px-8 py-4 text-lg font-semibold border-2 border-black relative overflow-hidden group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Our Story
            </span>
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
        
        <motion.div
          className="mt-16 flex justify-center items-center space-x-8 text-sm text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="font-bold text-2xl text-white">500+</div>
            <div>Businesses Served</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl text-white">$50M+</div>
            <div>Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-2xl text-white">98%</div>
            <div>Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
