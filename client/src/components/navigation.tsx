import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { AccessibleButton } from './accessible-button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    setServicesOpen(false);
  };

  const isActive = (section: string) => {
    return location === '/' && activeSection === section;
  };

  const serviceLinks = [
    { name: 'SEO Services', path: '/seo-services' },
    { name: 'Website Design', path: '/website-design' },
    { name: 'PPC Management', path: '/ppc-management' },
    { name: 'Content Marketing', path: '/content-marketing' },
    { name: 'Social Media Management', path: '/social-media-management' },
    { name: 'Technical SEO', path: '/seo-tech' },
    { name: 'Google Ads', path: '/google-ads' }
  ];

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
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation('/')}
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
              {/* Home */}
              <motion.button
                onClick={() => location === '/' ? scrollToSection('home') : handleNavigation('/')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <motion.button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-lg flex items-center gap-1"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                    >
                      {serviceLinks.map((service) => (
                        <button
                          key={service.path}
                          onClick={() => handleNavigation(service.path)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries */}
              <motion.button
                onClick={() => handleNavigation('/industries')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Industries
              </motion.button>

              {/* About */}
              <motion.button
                onClick={() => handleNavigation('/about')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>

              {/* Blog */}
              <motion.button
                onClick={() => handleNavigation('/blog')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors rounded-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Blog
              </motion.button>

              {/* Contact */}
              <motion.button
                onClick={() => handleNavigation('/contact')}
                className="px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <AccessibleButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 min-h-[44px] min-w-[44px]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              variant="ghost"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </AccessibleButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              <AccessibleButton
                onClick={() => location === '/' ? scrollToSection('home') : handleNavigation('/')}
                className="block w-full text-left px-4 py-3 min-h-[44px] text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                variant="ghost"
              >
                Home
              </AccessibleButton>

              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-gray-900 font-semibold">Services</div>
                {serviceLinks.map((service) => (
                  <AccessibleButton
                    key={service.path}
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-8 py-3 min-h-[44px] text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                    variant="ghost"
                  >
                    {service.name}
                  </AccessibleButton>
                ))}
              </div>

              <AccessibleButton
                onClick={() => handleNavigation('/industries')}
                className="block w-full text-left px-4 py-3 min-h-[44px] text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                variant="ghost"
              >
                Industries
              </AccessibleButton>

              <AccessibleButton
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-4 py-3 min-h-[44px] text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                variant="ghost"
              >
                About
              </AccessibleButton>

              <AccessibleButton
                onClick={() => handleNavigation('/blog')}
                className="block w-full text-left px-4 py-3 min-h-[44px] text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                variant="ghost"
              >
                Blog
              </AccessibleButton>

              <AccessibleButton
                onClick={() => handleNavigation('/contact')}
                className="block w-full text-left px-4 py-3 min-h-[44px] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                variant="primary"
              >
                Contact Us
              </AccessibleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}