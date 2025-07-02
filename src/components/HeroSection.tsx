
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Croatian Villa"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="section-padding max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 animate-fade-in-up">
            DISCOVER
            <span className="block text-gold font-medium">ROTAS ESTATE</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Exclusive luxury estates and Mediterranean villas nestled in the pristine landscapes of Croatia
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#properties" className="btn-luxury">
              EXPLORE PROPERTIES
            </a>
            <a href="#contact" className="btn-outline-luxury bg-white/10 backdrop-blur-sm">
              SCHEDULE VIEWING
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;
