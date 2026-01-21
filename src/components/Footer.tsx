import { Linkedin, Instagram, Facebook, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div>
            <img
              src="/logo-removebg-preview_(2).png"
              alt="Just Core Realty"
              className="h-16 w-auto mb-6 brightness-110"
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed font-light mb-6">
              Redefining luxury living through exceptional real estate and bespoke interior design services.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-gold flex items-center justify-center transition-colors group"
              >
                <Linkedin size={18} className="text-gray-400 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-gold flex items-center justify-center transition-colors group"
              >
                <Instagram size={18} className="text-gray-400 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-gold flex items-center justify-center transition-colors group"
              >
                <Facebook size={18} className="text-gray-400 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-gold transition-colors font-light hover-underline-gold"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-gold transition-colors font-light hover-underline-gold"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="text-gray-400 hover:text-gold transition-colors font-light hover-underline-gold"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('amenities')}
                  className="text-gray-400 hover:text-gold transition-colors font-light hover-underline-gold"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-gold transition-colors font-light hover-underline-gold"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@justcorerealty.com" className="text-gray-400 hover:text-gold transition-colors font-light">
                  info@justcorerealty.com
                </a>
              </li>
              <li className="flex items-start">
                <Globe size={18} className="text-gold mt-1 mr-3 flex-shrink-0" />
                <a href="https://justcorerealty.com" className="text-gray-400 hover:text-gold transition-colors font-light">
                  www.justcorerealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
            © {new Date().getFullYear()} Just Core Realty and Interiors. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#privacy" className="text-gray-500 hover:text-gold text-sm transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#accessibility" className="text-gray-500 hover:text-gold text-sm transition-colors font-light">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </footer>
  );
}
