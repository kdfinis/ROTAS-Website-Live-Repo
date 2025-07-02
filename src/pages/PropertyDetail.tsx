
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Trees, Phone, MessageCircle, Grape, Calendar, Euro, Camera } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PropertyDetail = () => {
  const { id } = useParams();

  // Property data - in a real app this would come from an API
  const properties = [
    {
      id: 'Lot1',
      title: "The Complete Estate",
      subtitle: "Villa & Olive Groves",
      price: "Private Sale",
      location: "Croatian Adriatic Coast",
      type: "complete",
      description: "The entire heritage estate featuring the stone villa and both centuries-old olive orchards. A once-in-a-lifetime opportunity to own a complete Mediterranean legacy stretching across pristine coastline.",
      longDescription: "This extraordinary estate represents the pinnacle of Mediterranean heritage ownership. Spanning across ancient terraced land, the property encompasses a traditional stone villa and two productive olive groves that have been cultivated for centuries. The villa showcases authentic Croatian craftsmanship with thick stone walls, traditional tile roofing, and panoramic sea views. Each olive tree tells a story of generations past, producing premium oil that embodies the essence of the Adriatic terroir.",
      features: ["Stone Villa with 6 Chambers", "900+ Ancient Olive Trees", "Private Coastline Access", "Heritage Property Status", "Original Stone Terraces", "Natural Spring Water", "Sunset Sea Views", "Development Rights"],
      specifications: {
        "Total Area": "15,000 m²",
        "Villa Size": "450 m²",
        "Olive Groves": "2 Separate Orchards",
        "Coastline": "150m Private Access",
        "Built": "18th Century",
        "Renovated": "2019"
      },
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 'Lot2',
      title: "The Stone Villa",
      subtitle: "Main Residence",
      price: "Upon Inquiry",
      location: "Croatian Adriatic Coast",
      type: "villa",
      description: "Traditional Croatian stone villa showcasing generations of Mediterranean craftsmanship, where every stone tells a story of island heritage.",
      longDescription: "This magnificent stone villa stands as a testament to Croatian architectural heritage. Built with locally quarried stone and traditional techniques passed down through generations, the villa features six spacious chambers, each with unique character and sea views. The thick stone walls provide natural insulation, keeping the interior cool in summer and warm during Mediterranean winters. Original wooden beams, traditional tile floors, and carefully preserved architectural details create an atmosphere of timeless elegance.",
      features: ["6 Chambers with Sea Views", "Traditional Stone Construction", "Original Wooden Beams", "Stone Terraces", "Panoramic Vistas", "Heritage Architecture"],
      specifications: {
        "Villa Size": "450 m²",
        "Bedrooms": "6",
        "Bathrooms": "4",
        "Built": "18th Century",
        "Terrace": "200 m²",
        "Renovation": "Completed 2019"
      },
      images: [
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 'Lot3',
      title: "Heritage Grove",
      subtitle: "First Olive Orchard",
      price: "Upon Inquiry",
      location: "Croatian Adriatic Coast",
      type: "orchard",
      description: "Ancient olive grove with trees planted by generations past, offering both agricultural heritage and investment potential in Croatia's golden landscape.",
      longDescription: "This heritage olive grove represents centuries of Mediterranean agricultural tradition. Over 500 ancient olive trees create a living museum of Croatian farming heritage. The grove produces exceptional extra virgin olive oil with distinctive terroir characteristics unique to this coastal microclimate. Terraced stone walls built by previous generations create a stunning landscape that has remained virtually unchanged for centuries.",
      features: ["500+ Ancient Trees", "Organic Heritage Production", "Annual Harvest Rights", "Development Potential", "Stone Terraces", "Sea Proximity"],
      specifications: {
        "Grove Area": "8,000 m²",
        "Olive Trees": "500+",
        "Tree Age": "100-300 years",
        "Annual Yield": "2,000L Premium Oil",
        "Organic Status": "Traditional Methods",
        "Terraces": "Original Stone"
      },
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 'Lot4',
      title: "Golden Grove",
      subtitle: "Second Olive Orchard",
      price: "Upon Inquiry",
      location: "Croatian Adriatic Coast",
      type: "orchard",
      description: "Second heritage olive grove with pristine ancient trees and fertile Mediterranean soil, perfect for continued cultivation or thoughtful development.",
      longDescription: "The Golden Grove complements the Heritage Grove with an additional 400 centuries-old olive trees. This orchard benefits from natural spring water and optimal sun exposure, producing olives of exceptional quality. The grove offers flexibility for heritage continuation or tasteful development while maintaining the landscape's historical character.",
      features: ["400+ Heritage Trees", "Prime Mediterranean Terroir", "Natural Springs", "Flexible Development Rights", "Optimal Sun Exposure", "Historical Significance"],
      specifications: {
        "Grove Area": "6,000 m²",
        "Olive Trees": "400+",
        "Water Source": "Natural Springs",
        "Annual Yield": "1,500L Premium Oil",
        "Soil Quality": "Prime Mediterranean",
        "Development": "Flexible Rights"
      },
      images: [
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 'Lot5',
      title: "Future Vineyard",
      subtitle: "Development Parcel",
      price: "Coming Soon",
      location: "Croatian Adriatic Coast",
      type: "future",
      description: "Additional terraced land with vineyard potential, offering expansion opportunities for those who understand the value of Croatian terroir.",
      longDescription: "This pristine parcel represents untapped potential in one of Croatia's most desirable coastal regions. The terraced land offers ideal conditions for vineyard development, with perfect sun exposure, well-draining soil, and proximity to the sea creating optimal growing conditions for premium Croatian wine varieties.",
      features: ["Vineyard Development Potential", "Sea Access Rights", "Heritage Planning Approved", "Investment Grade Location", "Optimal Terroir", "Flexible Use Rights"],
      specifications: {
        "Parcel Size": "5,000 m²",
        "Elevation": "50-100m above sea",
        "Slope": "Optimal vineyard grade",
        "Planning": "Development approved",
        "Access": "Direct sea access",
        "Potential": "Premium vineyard"
      },
      images: [
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-stone-800 mb-4">Property Not Found</h1>
          <Link to="/" className="btn-estate">
            Return to Estate
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'villa': return <Home className="w-6 h-6 text-gold" />;
      case 'orchard': return <Trees className="w-6 h-6 text-olive" />;
      case 'future': return <Grape className="w-6 h-6 text-stone-600" />;
      default: return <MapPin className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Image Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
        
        {/* Back Button */}
        <Link
          to="/#estate"
          className="absolute top-8 left-8 bg-cream/90 backdrop-blur-sm rounded-full p-3 hover:bg-cream transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-stone-800" />
        </Link>
        
        {/* Property Badge */}
        <div className="absolute top-8 right-8 bg-gold text-stone-900 px-6 py-3 rounded-full font-medium tracking-wide">
          {property.price}
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 text-cream">
          <div className="flex items-center mb-4">
            <div className="bg-cream/20 backdrop-blur-sm rounded-full p-3 mr-4">
              {getIcon(property.type)}
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-wide">{property.title}</h1>
              <p className="text-gold text-lg tracking-wider mt-1">{property.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-light text-stone-800 tracking-wide mb-6">
                  About This Property
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  {property.description}
                </p>
                <p className="text-stone-600 leading-relaxed">
                  {property.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-6">
                  Property Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-stone-50 rounded-lg p-4">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-stone-700 tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src={image}
                        alt={`${property.title} view ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Property Info Card */}
                <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-5 h-5 text-gold mr-2" />
                    <span className="text-stone-600 tracking-wide">{property.location}</span>
                  </div>
                  
                  <h4 className="text-xl font-medium text-stone-800 tracking-wide mb-6">
                    Property Specifications
                  </h4>
                  
                  <div className="space-y-4">
                    {Object.entries(property.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-stone-200 pb-2">
                        <span className="text-stone-600 text-sm tracking-wide">{key}</span>
                        <span className="text-stone-800 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gold/10 rounded-lg p-8 border border-gold/20">
                  <h4 className="text-xl font-medium text-stone-800 tracking-wide mb-6 text-center">
                    Inquire About This Property
                  </h4>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:+352621815753"
                      className="w-full btn-estate flex items-center justify-center"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </a>
                    
                    <a
                      href="https://wa.me/352621815753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-outline-estate flex items-center justify-center"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp Inquiry
                    </a>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                    <p className="text-stone-600 text-sm tracking-wide">
                      Available for private viewing by appointment
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-cream rounded-lg p-6 border border-stone-200">
                  <h4 className="text-lg font-medium text-stone-800 tracking-wide mb-4">
                    Quick Facts
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gold mr-2" />
                      <span className="text-stone-600">Heritage Property Status</span>
                    </div>
                    <div className="flex items-center">
                      <Euro className="w-4 h-4 text-gold mr-2" />
                      <span className="text-stone-600">Flexible Payment Terms</span>
                    </div>
                    <div className="flex items-center">
                      <Camera className="w-4 h-4 text-gold mr-2" />
                      <span className="text-stone-600">Virtual Tours Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
