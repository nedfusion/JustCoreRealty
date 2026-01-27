import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'nav-scrolled'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-removebg-preview_(2).png"
              alt="Just Core Realty"
              className="h-20 w-auto brightness-110"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            <Link
              to="/"
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              SERVICES
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/amenities"
              className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide hover-underline-gold"
            >
              AMENITIES
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2.5 text-sm font-semibold tracking-wide"
            >
              CONTACT US
            </Link>
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
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              SERVICES
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/amenities"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-white hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              AMENITIES
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 text-gold font-semibold text-sm tracking-wide"
            >
              CONTACT US
            </Link>

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
