import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Trees, Phone, MessageCircle, Grape, Download } from 'lucide-react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 'lot-1',
      title: "The Stone Villa",
      subtitle: "Main Residence",
      price: "€890,000 EUR",
      image: "/assets/images/villa/panoramic/panoramic-19.jpg",
      description: "Traditional Croatian stone villa showcasing generations of Mediterranean craftsmanship, where every stone tells a story of island heritage.",
      features: ["6 Chambers", "Sea Vistas", "Stone Terraces", "Original Architecture"],
      type: "villa"
    },
    {
      id: 'lot-2',
      title: "Heritage Grove",
      subtitle: "First Olive Orchard",
      price: "Upon Inquiry",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient olive grove with trees planted by generations past, offering both agricultural heritage and investment potential in Croatia's golden landscape.",
      features: ["500+ Ancient Trees", "Organic Heritage", "Annual Harvest", "Development Rights"],
      type: "orchard"
    },
    {
      id: 'lot-3',
      title: "The Complete Estate",
      subtitle: "Villa & Olive Groves",
      price: "Private Sale",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The entire heritage estate featuring the stone villa and both centuries-old olive orchards. A once-in-a-lifetime opportunity to own a complete Mediterranean legacy.",
      features: ["Stone Villa", "Ancient Olive Groves", "Private Coastline", "Heritage Property"],
      type: "complete"
    }
    // Room for more properties here
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
              <Link to={`/property/${property.id}`} className="relative h-72 w-full flex items-center justify-center overflow-hidden group/image">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 fixed-property-image"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-cream/90 backdrop-blur-sm rounded-full p-3 border border-stone-200">
                    {getIcon(property.type)}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-gold text-stone-900 px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                    {property.price}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
              </Link>

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
                      href="#"
                      className="flex-1 btn-outline-estate text-center text-sm py-2 flex items-center justify-center"
                    >
                      <Download size={14} className="inline mr-1" />
                      Documentation
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

        {/* Night Panoramic Photo */}
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl border border-stone-200">
          <img
            src="/assets/images/villa/panoramic/lot1-panoramic-03.jpg"
            alt="Night view of the Croatian estate"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              console.error('Image failed to load:', e.currentTarget.src);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully')}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
