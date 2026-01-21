import { useState } from 'react';
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-charcoal sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="/logo-removebg-preview_(2).png"
              alt="Just Core Realty"
              className="h-14 w-auto brightness-110"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              AMENITIES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2.5 text-sm font-semibold tracking-wide"
            >
              CONTACT US
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4 ml-8">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>

          <button
            className="lg:hidden text-white hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              AMENITIES
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 text-gold font-semibold text-sm tracking-wide"
            >
              CONTACT US
            </button>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
