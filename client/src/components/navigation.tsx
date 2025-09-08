import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Scroll-spy functionality
      const sections = ['home', 'services', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  const isActive = (section: string) => {
    return location === '/' && activeSection === section;
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white border-b border-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover effect */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/images/logo.png" 
              alt="WHITEBRD" 
              className={`transition-all duration-300 ${
                scrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
              }`}
              style={{ filter: scrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {[
                { name: 'Home', action: () => location === '/' ? scrollToSection('home') : handleNavigation('/'), section: 'home' },
                { name: 'Industries', action: () => handleNavigation('/industries'), section: null },
                { name: 'Our Services', action: () => location === '/' ? scrollToSection('services') : handleNavigation('/'), section: 'services' },
                { name: 'Our Story', action: () => handleNavigation('/about'), section: null },
                { name: 'Blog', action: () => handleNavigation('/blog'), section: null },
                { name: "Let's Connect", action: () => location === '/' ? scrollToSection('connect') : handleNavigation('/'), section: 'connect' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    item.section && isActive(item.section)
                      ? 'text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.section && isActive(item.section) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-lg"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${
                    item.section && isActive(item.section) ? '' : 'hover:text-black'
                  }`}>
                    {item.name}
                  </span>
                  {!item.section && !isActive(item.section || '') && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', action: () => location === '/' ? scrollToSection('home') : handleNavigation('/'), section: 'home' },
                { name: 'Industries', action: () => handleNavigation('/industries'), section: null },
                { name: 'Our Services', action: () => location === '/' ? scrollToSection('services') : handleNavigation('/'), section: 'services' },
                { name: 'Our Story', action: () => handleNavigation('/about'), section: null },
                { name: 'Blog', action: () => handleNavigation('/blog'), section: null },
                { name: "Let's Connect", action: () => location === '/' ? scrollToSection('connect') : handleNavigation('/'), section: 'connect' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    item.section && isActive(item.section)
                      ? 'bg-gradient-to-r from-gray-800 to-black text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}