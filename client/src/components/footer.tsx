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

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-lato-bold text-3xl mb-6 tracking-wide">Whitebrd Co.</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We help HVAC and plumbing contractors dominate their local markets with proven digital marketing strategies that generate more leads and increase revenue.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                hello@whitebrdco.com
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Nationwide Service
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-lato-bold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Free Audit
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-lato-bold text-lg mb-6">Services</h4>
            <div className="space-y-3 text-gray-300">
              <p>Local SEO</p>
              <p>Google Ads</p>
              <p>Website Design</p>
              <p>Social Media Marketing</p>
              <p>Review Management</p>
              <p>Lead Generation</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Whitebrd Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
