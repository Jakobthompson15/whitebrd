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
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bebas text-2xl mb-4 tracking-wide">Whitebrd Co.</h3>
            <p className="text-gray-300 leading-relaxed">
              Transforming blank canvases into digital masterpieces that drive growth and build lasting connections.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
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
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Let's Connect
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>hello@whitebrdco.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Whitebrd Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
