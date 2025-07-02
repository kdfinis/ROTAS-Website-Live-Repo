
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Trees, Phone, MessageCircle, Grape } from 'lucide-react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: "The Complete Estate",
      subtitle: "Villa & Olive Groves",
      price: "Private Sale",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The entire heritage estate featuring the stone villa and both centuries-old olive orchards. A once-in-a-lifetime opportunity to own a complete Mediterranean legacy.",
      features: ["Stone Villa", "Ancient Olive Groves", "Private Coastline", "Heritage Property"],
      type: "complete"
    },
    {
      id: 2, 
      title: "The Stone Villa",
      subtitle: "Main Residence",
      price: "Upon Inquiry",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Traditional Croatian stone villa showcasing generations of Mediterranean craftsmanship, where every stone tells a story of island heritage.",
      features: ["6 Chambers", "Sea Vistas", "Stone Terraces", "Original Architecture"],
      type: "villa"
    },
    {
      id: 3,
      title: "Heritage Grove",
      subtitle: "First Olive Orchard",
      price: "Upon Inquiry", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient olive grove with trees planted by generations past, offering both agricultural heritage and investment potential in Croatia's golden landscape.",
      features: ["500+ Ancient Trees", "Organic Heritage", "Annual Harvest", "Development Rights"],
      type: "orchard"
    },
    {
      id: 4,
      title: "Golden Grove", 
      subtitle: "Second Olive Orchard",
      price: "Upon Inquiry",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Second heritage olive grove with pristine ancient trees and fertile Mediterranean soil, perfect for continued cultivation or thoughtful development.",
      features: ["400+ Heritage Trees", "Prime Terroir", "Natural Springs", "Flexible Heritage Use"],
      type: "orchard"
    },
    {
      id: 5,
      title: "Future Vineyard",
      subtitle: "Development Parcel", 
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Additional terraced land with vineyard potential, offering expansion opportunities for those who understand the value of Croatian terroir.",
      features: ["Vineyard Potential", "Sea Access", "Heritage Planning", "Investment Grade"],
      type: "future"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'villa': return <Home className="w-6 h-6 text-gold" />;
      case 'orchard': return <Trees className="w-6 h-6 text-olive" />;
      case 'future': return <Grape className="w-6 h-6 text-stone-600" />;
      default: return <MapPin className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="estate" className="py-20 lg:py-32 bg-cream rustic-texture">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold tracking-widest text-sm mb-4 uppercase">
            For Private Sale
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 tracking-wider mb-8">
            A HERITAGE
            <span className="block text-gold font-normal">COLLECTION</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto tracking-wide leading-relaxed">
            Each parcel represents generations of Croatian heritage, 
            where Mediterranean tradition meets timeless investment opportunity
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="group bg-cream border border-stone-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 animate-fade-in-up stone-texture"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-cream/90 backdrop-blur-sm rounded-full p-3 border border-stone-200">
                    {getIcon(property.type)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gold text-stone-900 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                    {property.price}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-stone-800 tracking-wide mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gold font-medium tracking-wider text-sm uppercase">
                    {property.subtitle}
                  </p>
                </div>

                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {property.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-xs tracking-wide border border-stone-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    to={`/property/${property.id}`}
                    className="btn-estate w-full text-sm py-3 text-center"
                  >
                    VIEW DETAILS
                  </Link>
                  <div className="flex space-x-3">
                    <a
                      href="tel:+352621815753"
                      className="flex-1 btn-outline-estate text-center text-sm py-2"
                    >
                      <Phone size={14} className="inline mr-1" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/352621815753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline-estate text-center text-sm py-2"
                    >
                      <MessageCircle size={14} className="inline mr-1" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-cream rounded-lg p-12 shadow-lg max-w-5xl mx-auto border border-stone-200 stone-texture">
            <h3 className="text-3xl font-light text-stone-800 tracking-wider mb-6">
              Experience Croatian Heritage
            </h3>
            <p className="text-stone-600 mb-8 tracking-wide text-lg leading-relaxed max-w-3xl mx-auto">
              Arrange a private viewing to walk among century-old olive trees 
              and experience the timeless beauty of this Mediterranean estate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="btn-estate text-lg py-4 px-10">
                ARRANGE VIEWING
              </a>
              <a 
                href="https://wa.me/352621815753"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-estate text-lg py-4 px-10"
              >
                PRIVATE INQUIRY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
