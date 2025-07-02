
import React from 'react';
import { MapPin, Home, Trees, Phone, MessageCircle } from 'lucide-react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: "Complete Estate",
      subtitle: "Villa + Olive Orchards",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The entire estate featuring the luxury villa and both olive orchards. A rare opportunity to own a complete Mediterranean sanctuary.",
      features: ["Luxury Villa", "2 Olive Orchards", "Private Access", "Heritage Property"],
      type: "complete"
    },
    {
      id: 2, 
      title: "Luxury Villa",
      subtitle: "Main Residence",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exquisite Mediterranean villa showcasing traditional Croatian architecture with modern luxury amenities.",
      features: ["6 Bedrooms", "Sea Views", "Private Pool", "Modern Kitchen"],
      type: "villa"
    },
    {
      id: 3,
      title: "Olive Orchard I",
      subtitle: "Heritage Grove",
      price: "Contact for Price", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Established olive grove with century-old trees, offering both agricultural potential and investment opportunity.",
      features: ["500+ Trees", "Organic Certified", "Annual Harvest", "Development Potential"],
      type: "orchard"
    },
    {
      id: 4,
      title: "Olive Orchard II", 
      subtitle: "Premium Grove",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Second olive grove with pristine trees and excellent soil conditions, perfect for continued cultivation or development.",
      features: ["400+ Trees", "Prime Location", "Water Access", "Flexible Use"],
      type: "orchard"
    },
    {
      id: 5,
      title: "Future Parcel",
      subtitle: "Development Opportunity", 
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Additional land parcel with development potential, offering expansion opportunities for the discerning buyer.",
      features: ["Buildable Land", "Sea Access", "Planning Permission", "Investment Grade"],
      type: "future"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'villa': return <Home className="w-6 h-6 text-gold" />;
      case 'orchard': return <Trees className="w-6 h-6 text-gold" />;
      default: return <MapPin className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="properties" className="py-20 lg:py-32 bg-gray-50">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-navy-800 tracking-wider mb-6">
            EXCEPTIONAL
            <span className="block text-gold font-medium">PROPERTIES</span>
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto tracking-wide">
            Each property represents a unique opportunity to own a piece of Croatian Mediterranean heritage
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {getIcon(property.type)}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy-800 tracking-wide mb-1">
                    {property.title}
                  </h3>
                  <p className="text-gold font-medium tracking-wider text-sm">
                    {property.subtitle}
                  </p>
                </div>

                <p className="text-navy-600 text-sm mb-4 leading-relaxed">
                  {property.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-navy-50 text-navy-700 px-3 py-1 rounded-full text-xs tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button className="btn-luxury w-full text-sm">
                    VIEW DETAILS
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href="tel:+352621815753"
                      className="flex-1 btn-outline-luxury text-center text-sm py-2"
                    >
                      <Phone size={14} className="inline mr-1" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/352621815753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-outline-luxury text-center text-sm py-2"
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
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium text-navy-800 tracking-wider mb-4">
              Ready to Discover Your Croatian Estate?
            </h3>
            <p className="text-navy-600 mb-6 tracking-wide">
              Schedule a private viewing or consultation to explore these exceptional properties in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn-luxury">
                SCHEDULE VIEWING
              </a>
              <a 
                href="https://wa.me/352621815753"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-luxury"
              >
                CONTACT VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
