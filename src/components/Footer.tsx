
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-cream py-16 rustic-texture">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Estate Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-stone-900 font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-light text-2xl tracking-widest">ROTAS ESTATE</h3>
                <p className="text-xs tracking-widest text-cream/70 uppercase">Croatian Heritage Property</p>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed mb-6 max-w-lg text-lg">
              A rare Mediterranean estate where centuries-old olive groves meet timeless stone architecture 
              on Croatia's pristine Adriatic coast. This is not just property—it's heritage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/352621815753"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold/20 p-3 rounded-lg hover:bg-gold/30 transition-colors border border-gold/30"
              >
                <MessageCircle size={20} className="text-gold-300" />
              </a>
              <a
                href="tel:+352621815753"
                className="bg-gold/20 p-3 rounded-lg hover:bg-gold/30 transition-colors border border-gold/30"
              >
                <Phone size={20} className="text-gold-300" />
              </a>
              <a
                href="mailto:karlodefinis@gmail.com"
                className="bg-gold/20 p-3 rounded-lg hover:bg-gold/30 transition-colors border border-gold/30"
              >
                <Mail size={20} className="text-gold-300" />
              </a>
            </div>
          </div>

          {/* Estate Details */}
          <div>
            <h4 className="font-medium tracking-wider mb-6 text-gold-300 uppercase">Estate</h4>
            <ul className="space-y-3">
              <li>
                <a href="#estate" className="text-cream/80 hover:text-gold-300 transition-colors tracking-wide">
                  The Collection
                </a>
              </li>
              <li>
                <a href="#heritage" className="text-cream/80 hover:text-gold-300 transition-colors tracking-wide">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#contact" className="text-cream/80 hover:text-gold-300 transition-colors tracking-wide">
                  Private Viewing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium tracking-wider mb-6 text-gold-300 uppercase">Private Sale Inquiry</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-gold-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream/80">+352 621 815 753</p>
                  <p className="text-cream/80">+385 98 432 648</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-gold-300 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:karlodefinis@gmail.com"
                  className="text-cream/80 hover:text-gold-300 transition-colors"
                >
                  karlodefinis@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold-300 mt-1 flex-shrink-0" />
                <p className="text-cream/80">Croatian Adriatic Coast</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm tracking-wide">
              © 2024 ROTAS ESTATE. Private heritage property for sale.
            </p>
            <div className="flex items-center space-x-8 text-sm">
              <a href="#" className="text-cream/60 hover:text-gold-300 transition-colors tracking-wide">
                Legal Documents
              </a>
              <a href="#" className="text-cream/60 hover:text-gold-300 transition-colors tracking-wide">
                Land Registry
              </a>
              <a href="#" className="text-cream/60 hover:text-gold-300 transition-colors tracking-wide">
                Heritage Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
