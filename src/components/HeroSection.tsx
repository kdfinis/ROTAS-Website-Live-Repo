
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
          poster="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback image - Croatian coastline */}
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Croatian Coastline"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-cream">
        <div className="section-padding max-w-6xl">
          <div className="mb-8">
            <div className="text-readable inline-block">
              <p className="text-lg md:text-xl tracking-widest mb-4 animate-fade-in-up">
                A PRIVATE FAMILY ESTATE FOR SALE
              </p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-8 animate-fade-in-up text-shadow-lg" style={{ animationDelay: '0.2s' }}>
            ROTAS
            <span className="block text-gold font-normal mt-2 bg-cream/90 px-8 py-2 rounded-lg inline-block">ESTATE</span>
          </h1>
          
          <div className="text-readable max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide opacity-90">
              A rare Mediterranean sanctuary where century-old olive groves meet 
              timeless architecture on the pristine Croatian coast
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="#estate" className="btn-estate text-lg py-4 px-10">
              DISCOVER THE ESTATE
            </a>
            <a href="#contact" className="btn-outline-estate bg-cream/10 backdrop-blur-sm text-lg py-4 px-10">
              INQUIRE NOW
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <ChevronDown size={32} className="opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;
