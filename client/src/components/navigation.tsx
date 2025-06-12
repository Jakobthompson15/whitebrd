import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoPath from '@assets/ChatGPT Image Jun 9 2025 from Google Business_1749695415413.png';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logoPath} 
              alt="Whitebrd Co." 
              className="h-12 w-auto md:h-16"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:bg-black hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:bg-black hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="hover:bg-black hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="hover:bg-black hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-black hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection('connect')}
              className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
