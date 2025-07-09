import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Download, Calendar, Phone, Mail, MessageCircle, ArrowLeft, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data - in a real app this would come from an API
const propertyData = {
  1: {
    id: 1,
    title: "The Complete Estate",
    subtitle: "Villa & Olive Groves",
    heroVideo: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "The entire heritage estate featuring the stone villa and both centuries-old olive orchards. A once-in-a-lifetime opportunity to own a complete Mediterranean legacy.",
    stats: "Complete Estate | 15,000 m² | Sea View | Heritage Property",
    gallery: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    details: {
      location: "Milna, Island of Brač, Croatia",
      size: "15,000 m²",
      zoning: "Mixed Use - Residential & Agricultural",
      access: "Legal road access confirmed",
      documentation: "Ownership 1/1, UPU, no liens",
      description: "This complete heritage estate represents the pinnacle of Mediterranean living, combining centuries of Croatian tradition with modern luxury. The stone villa, built with traditional techniques, stands as a testament to island craftsmanship, while the ancient olive groves tell stories of generations past. The property offers unparalleled privacy and exclusivity, with direct access to the Adriatic Sea and panoramic views that stretch across the Dalmatian archipelago. This is not just a property—it's a legacy waiting to be continued."
    },
    downloads: [
      { label: "Complete Estate Overview", file: "/docs/complete-estate-overview.pdf" },
      { label: "Title Deed", file: "/docs/complete-estate-title.pdf" },
      { label: "Survey Report", file: "/docs/complete-estate-survey.pdf" },
      { label: "Heritage Documentation", file: "/docs/complete-estate-heritage.pdf" }
    ],
    map: {
      lat: 43.325490,
      lng: 16.451220
    },
    contact: {
      whatsapp: "https://wa.me/352621815753",
      email: "karlodefinis@gmail.com",
      phone: "+38598432648"
    }
  },
  2: {
    id: 2,
    title: "The Stone Villa",
    subtitle: "Main Residence",
    heroVideo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "Traditional Croatian stone villa showcasing generations of Mediterranean craftsmanship, where every stone tells a story of island heritage.",
    stats: "Stone Villa | 450 m² | 6 Chambers | Sea Vistas",
    gallery: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    details: {
      location: "Milna, Island of Brač, Croatia",
      size: "450 m²",
      zoning: "Residential",
      access: "Legal road access confirmed",
      documentation: "Ownership 1/1, UPU, no liens",
      description: "This magnificent stone villa embodies the essence of Mediterranean architecture, where every detail has been crafted with purpose and tradition. The six chambers each tell their own story, with original stonework that has weathered centuries of island life. The sea vistas from every window frame the Adriatic like living paintings, while the stone terraces provide the perfect setting for Mediterranean living. This is more than a home—it's a piece of Croatian history."
    },
    downloads: [
      { label: "Villa Overview", file: "/docs/villa-overview.pdf" },
      { label: "Architectural Plans", file: "/docs/villa-plans.pdf" },
      { label: "Title Deed", file: "/docs/villa-title.pdf" }
    ],
    map: {
      lat: 43.325490,
      lng: 16.451220
    },
    contact: {
      whatsapp: "https://wa.me/352621815753",
      email: "karlodefinis@gmail.com",
      phone: "+38598432648"
    }
  },
  3: {
    id: 3,
    title: "Heritage Grove",
    subtitle: "First Olive Orchard",
    heroVideo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "Ancient olive grove with trees planted by generations past, offering both agricultural heritage and investment potential in Croatia's golden landscape.",
    stats: "Heritage Grove | 6,500 m² | 500+ Ancient Trees | Organic Heritage",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    details: {
      location: "Milna, Island of Brač, Croatia",
      size: "6,500 m²",
      zoning: "Agricultural",
      access: "Legal road access confirmed",
      documentation: "Ownership 1/1, UPU, no liens",
      description: "This ancient olive grove is a living testament to Mediterranean agricultural heritage. With over 500 ancient trees, some dating back centuries, this grove has been producing the finest Croatian olive oil for generations. The organic heritage of this land is unmatched, with natural springs and fertile Mediterranean soil creating the perfect terroir for continued cultivation. This is not just agricultural land—it's a piece of living history."
    },
    downloads: [
      { label: "Grove Overview", file: "/docs/heritage-grove-overview.pdf" },
      { label: "Agricultural Report", file: "/docs/heritage-grove-agricultural.pdf" },
      { label: "Title Deed", file: "/docs/heritage-grove-title.pdf" }
    ],
    map: {
      lat: 43.325490,
      lng: 16.451220
    },
    contact: {
      whatsapp: "https://wa.me/352621815753",
      email: "karlodefinis@gmail.com",
      phone: "+38598432648"
    }
  },
  4: {
    id: 4,
    title: "Golden Grove",
    subtitle: "Second Olive Orchard",
    heroVideo: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "Second heritage olive grove with pristine ancient trees and fertile Mediterranean soil, perfect for continued cultivation or thoughtful development.",
    stats: "Golden Grove | 5,500 m² | 400+ Heritage Trees | Prime Terroir",
    gallery: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    details: {
      location: "Milna, Island of Brač, Croatia",
      size: "5,500 m²",
      zoning: "Agricultural",
      access: "Legal road access confirmed",
      documentation: "Ownership 1/1, UPU, no liens",
      description: "The Golden Grove represents the perfect balance of heritage and opportunity. With over 400 heritage trees and natural springs, this grove offers both agricultural excellence and development potential. The prime terroir and flexible heritage use rights make this an exceptional investment opportunity for those who understand the value of Croatian agricultural heritage."
    },
    downloads: [
      { label: "Grove Overview", file: "/docs/golden-grove-overview.pdf" },
      { label: "Agricultural Report", file: "/docs/golden-grove-agricultural.pdf" },
      { label: "Title Deed", file: "/docs/golden-grove-title.pdf" }
    ],
    map: {
      lat: 43.325490,
      lng: 16.451220
    },
    contact: {
      whatsapp: "https://wa.me/352621815753",
      email: "karlodefinis@gmail.com",
      phone: "+38598432648"
    }
  },
  5: {
    id: 5,
    title: "Future Vineyard",
    subtitle: "Development Parcel",
    heroVideo: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "Additional terraced land with vineyard potential, offering expansion opportunities for those who understand the value of Croatian terroir.",
    stats: "Future Vineyard | 3,000 m² | Vineyard Potential | Sea Access",
    gallery: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    details: {
      location: "Milna, Island of Brač, Croatia",
      size: "3,000 m²",
      zoning: "Agricultural/Development",
      access: "Legal road access confirmed",
      documentation: "Ownership 1/1, UPU, no liens",
      description: "This terraced parcel represents the future of Croatian viticulture. With its unique microclimate and sea access, this land offers exceptional potential for vineyard development. The heritage planning permissions and investment-grade characteristics make this an opportunity for visionary investors who understand the value of Croatian terroir."
    },
    downloads: [
      { label: "Parcel Overview", file: "/docs/future-vineyard-overview.pdf" },
      { label: "Development Potential", file: "/docs/future-vineyard-development.pdf" },
      { label: "Title Deed", file: "/docs/future-vineyard-title.pdf" }
    ],
    map: {
      lat: 43.325490,
      lng: 16.451220
    },
    contact: {
      whatsapp: "https://wa.me/352621815753",
      email: "karlodefinis@gmail.com",
      phone: "+38598432648"
    }
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    viewingDate: '',
    message: '',
    honeypot: ''
  });

  const property = propertyData[id as keyof typeof propertyData];

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarSolid(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-stone-800 mb-4">Property Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn-estate"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Honeypot protection
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon.');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Media Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={property.fallbackImage}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
              {property.title}
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium tracking-wider">
              {property.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              {property.overview}
            </p>
            <div className="bg-stone-100 rounded-lg p-6 border border-stone-200">
              <p className="text-xl font-medium text-stone-800 tracking-wide">
                {property.stats}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-16 bg-stone-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12 tracking-wider">
              GALLERY
            </h2>
            
            <div className="relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={property.gallery[currentImageIndex]}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream/90 backdrop-blur-sm rounded-full p-3 border border-stone-200 hover:bg-cream transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-stone-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream/90 backdrop-blur-sm rounded-full p-3 border border-stone-200 hover:bg-cream transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-stone-800" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-stone-900/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {property.gallery.length}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {property.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'border-gold' 
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lot Details Block */}
      <section className="py-16 bg-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12 tracking-wider">
              LOT DETAILS
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Description */}
              <div>
                <h3 className="text-2xl font-medium text-stone-800 mb-6 tracking-wide">
                  Property Character
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {property.details.description}
                </p>
              </div>
              
              {/* Right Column - Facts */}
              <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
                <h3 className="text-2xl font-medium text-stone-800 mb-6 tracking-wide">
                  Key Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gold mr-3" />
                    <span className="text-stone-700">{property.details.location}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded-full mr-3"></div>
                    <span className="text-stone-700">Size: {property.details.size}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded-full mr-3"></div>
                    <span className="text-stone-700">Zoning: {property.details.zoning}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded-full mr-3"></div>
                    <span className="text-stone-700">{property.details.access}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gold rounded-full mr-3"></div>
                    <span className="text-stone-700">{property.details.documentation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-stone-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12 tracking-wider">
              DOCUMENTATION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.downloads.map((download, index) => (
                <div
                  key={index}
                  className="bg-cream rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-stone-800 mb-2">
                        {download.label}
                      </h3>
                      <p className="text-sm text-stone-600">PDF Document</p>
                    </div>
                    <button className="btn-outline-estate">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="py-16 bg-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12 tracking-wider">
              LOCATION
            </h2>
            
            <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-stone-200">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${property.map.lat},${property.map.lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${property.title} Location`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Book Viewing Form */}
      <section className="py-16 bg-stone-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-stone-800 text-center mb-12 tracking-wider">
              BOOK A VIEWING
            </h2>
            
            <form onSubmit={handleFormSubmit} className="bg-cream rounded-lg p-8 shadow-lg border border-stone-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-stone-800 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-stone-800 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-stone-800 font-medium mb-2">
                  Preferred Viewing Date
                </label>
                <input
                  type="date"
                  value={formData.viewingDate}
                  onChange={(e) => setFormData({...formData, viewingDate: e.target.value})}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-stone-800 font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Tell us about your interest in this property..."
                ></textarea>
              </div>
              
              {/* Honeypot field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <button type="submit" className="btn-estate w-full text-lg py-4">
                REQUEST VIEWING
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-cream">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-stone-800 mb-12 tracking-wider">
              GET IN TOUCH
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-medium text-stone-800 mb-2">Email</h3>
                <a 
                  href={`mailto:${property.contact.email}`}
                  className="text-stone-600 hover:text-gold transition-colors"
                >
                  {property.contact.email}
                </a>
              </div>
              
              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-medium text-stone-800 mb-2">Phone</h3>
                <a 
                  href={`tel:${property.contact.phone}`}
                  className="text-stone-600 hover:text-gold transition-colors"
                >
                  {property.contact.phone}
                </a>
              </div>
              
              <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
                <MessageCircle className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-medium text-stone-800 mb-2">WhatsApp</h3>
                <a 
                  href={property.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-gold transition-colors"
                >
                  Chat Now
                </a>
              </div>
            </div>
            
            <a
              href={property.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-estate text-lg py-4 px-10 inline-flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Lot Documentation Download Box */}
      <div className="bg-stone-50 rounded-lg p-8 border border-stone-200 mt-8">
        <h4 className="text-xl font-medium text-stone-800 tracking-wide mb-4 text-center">
          Lot Documentation Download
        </h4>
        <a
          href={`/docs/lot-${property.id}-documentation.pdf`}
          className="w-full btn-outline-estate flex items-center justify-center"
          download
          aria-label="Lot Documentation Download"
        >
          <Download size={18} className="mr-2" />
          Documentation
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails; 