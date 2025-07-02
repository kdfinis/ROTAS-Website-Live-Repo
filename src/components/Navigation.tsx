
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-navy-800' : 'text-white'
              }`}>
                ROTAS ESTATE
              </h1>
              <p className={`text-xs tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-navy-600' : 'text-white/80'
              }`}>
                LUXURY PROPERTIES
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-navy-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Contact Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="tel:+352621815753"
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-navy-100 text-navy-700 hover:bg-navy-200' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Phone size={18} />
              </a>
              <a
                href="https://wa.me/352621815753"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury text-sm py-2 px-6"
              >
                <MessageCircle size={16} className="inline mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-navy-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-slide-down">
            <div className="section-padding py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-navy-700 font-medium tracking-wide py-2 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <a
                    href="tel:+352621815753"
                    className="flex items-center space-x-3 text-navy-700 hover:text-gold transition-colors"
                  >
                    <Phone size={18} />
                    <span>+352 621 815 753</span>
                  </a>
                  <a
                    href="https://wa.me/352621815753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury text-center"
                  >
                    <MessageCircle size={16} className="inline mr-2" />
                    Contact via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
