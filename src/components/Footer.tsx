
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-wider">ROTAS ESTATE</h3>
                <p className="text-xs tracking-widest text-white/70">LUXURY PROPERTIES</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 max-w-md">
              Discover exceptional luxury estates and Mediterranean villas in the pristine landscapes of Croatia. 
              Your gateway to exclusive Croatian real estate opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/352621815753"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold/20 p-2 rounded-lg hover:bg-gold/30 transition-colors"
              >
                <MessageCircle size={20} className="text-gold" />
              </a>
              <a
                href="tel:+352621815753"
                className="bg-gold/20 p-2 rounded-lg hover:bg-gold/30 transition-colors"
              >
                <Phone size={20} className="text-gold" />
              </a>
              <a
                href="mailto:karlodefinis@gmail.com"
                className="bg-gold/20 p-2 rounded-lg hover:bg-gold/30 transition-colors"
              >
                <Mail size={20} className="text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-gold transition-colors tracking-wide">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="text-white/80 hover:text-gold transition-colors tracking-wide">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-gold transition-colors tracking-wide">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold tracking-wider mb-4">CONTACT</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">+352 621 815 753</p>
                  <p className="text-white/80">+385 98 432 648</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={16} className="text-gold mt-1 flex-shrink-0" />
                <a 
                  href="mailto:karlodefinis@gmail.com"
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  karlodefinis@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/80">Croatian Adriatic Coast</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm tracking-wide">
              © 2024 ROTAS ESTATE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors tracking-wide">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors tracking-wide">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors tracking-wide">
                Legal Documents
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
