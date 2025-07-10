import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { label: 'Estate', href: '#estate' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-cream/95 backdrop-blur-md shadow-lg py-4 stone-texture' 
        : 'bg-transparent py-6'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo - Expanded clickable area */}
          <Link to="/" className="flex items-center space-x-4 group cursor-pointer" aria-label="Go to home page" style={{ minHeight: '48px', minWidth: '200px' }}>
            <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center gentle-sway">
              <span className="text-stone-900 font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className={`font-light text-2xl tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-stone-800' : 'text-cream'
              } group-hover:text-gold`}>
                ROTAS
              </h1>
              <p className={`text-sm tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-stone-600' : 'text-cream/80'
              } group-hover:text-gold`}>
                ESTATE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium tracking-wider transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-stone-700' : 'text-cream'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-stone-700' : 'text-cream'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-cream shadow-xl animate-slide-down rustic-texture">
            <div className="section-padding py-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-stone-700 font-medium tracking-wider py-2 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
