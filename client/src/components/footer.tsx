import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={footerVariants}
      >
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <motion.h3 
              className="font-marker text-4xl mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Whitebrd Co.
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
              We help businesses across industries grow with strategic SEO, conversion‑first websites, and content that turns attention into revenue.
            </p>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-gray-300">info@whitebrd.co</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-gray-300">(843) 624-3329</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Service Area</p>
                  <p className="text-gray-300">Nationwide Service</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-marker text-2xl mb-8 text-white">Quick Links</h4>
            <nav className="space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Services', id: 'services' },
                { name: 'Our Story', id: 'about' },
                { name: 'Free Audit', id: 'connect' }
              ].map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-200"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-marker text-2xl mb-8 text-white">Services</h4>
            <div className="space-y-4">
              {[
                'Local SEO',
                'National SEO', 
                'Website Design',
                'Review Management',
                'Lead Generation'
              ].map((service, index) => (
                <motion.div
                  key={service}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700/50 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © 2025 Whitebrd Co. All rights reserved.
            </motion.p>
            <div className="flex space-x-8 text-gray-400">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Cookie Policy', href: '/cookie-policy' }
              ].map((link, index) => (
                <Link key={link.name} href={link.href}>
                  <motion.a
                    className="hover:text-white transition-colors duration-200 relative group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}