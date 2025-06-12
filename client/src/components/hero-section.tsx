import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="font-bebas text-6xl sm:text-7xl lg:text-8xl mb-8 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Whitebrd Co.
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We take your blank canvas and craft a digital presence that wins attention, trust, and growth.
        </motion.p>
        <motion.p 
          className="text-lg sm:text-xl italic text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Start blank, grow bold.
        </motion.p>
      </div>
    </section>
  );
}
