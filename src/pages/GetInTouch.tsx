import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    viewingDate: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email sending logic
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/images/villa/panoramic/panoramic-19.jpg"
          alt="Get in touch hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80"></div>
        <div className="relative z-10 text-center text-cream animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-4 text-shadow-lg">GET IN TOUCH</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-cream/90">
            Ready to explore these exceptional properties? Contact us to schedule a private viewing or discuss investment opportunities.
          </p>
        </div>
        {/* Stencil Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gold/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-gold/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-gold/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section-padding animate-fade-in-up">
        <div className="max-w-4xl mx-auto relative">
          {/* Stencil Graphics around the form */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border border-gold/30 rounded-full animate-pulse"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 border border-gold/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-gold/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-14 h-14 border border-gold/25 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-1/2 -left-12 w-8 h-8 border border-gold/35 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -right-12 w-10 h-10 border border-gold/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="bg-white rounded-xl shadow-2xl p-10 border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-stone-800 mb-2 tracking-wider">Contact Information</h3>
                <p className="text-stone-600 text-base mb-2"><span className="font-medium">Phone:</span> +352 621 815 753 (Luxembourg)</p>
                <p className="text-stone-600 text-base mb-2"><span className="font-medium">Phone:</span> +385 98 432 648 (Croatia)</p>
                <p className="text-stone-600 text-base mb-2"><span className="font-medium">Email:</span> <a href="mailto:karlodefinis@gmail.com" className="text-gold underline">karlodefinis@gmail.com</a></p>
                <p className="text-stone-600 text-base mb-2"><span className="font-medium">WhatsApp:</span> <a href="https://wa.me/352621815753" target="_blank" rel="noopener noreferrer" className="text-gold underline">Click to chat instantly</a></p>
                <p className="text-stone-600 text-base mb-2"><span className="font-medium">Location:</span> Croatian Adriatic Coast</p>
              </div>
              {/* Contact Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-cream/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-cream/40" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-cream/40" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">Preferred Viewing Date</label>
                  <input type="text" name="viewingDate" value={formData.viewingDate} onChange={handleChange} className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-cream/40" placeholder="dd/mm/yyyy" />
                </div>
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border border-stone-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold bg-cream/40" placeholder="Tell us about your interest in the properties..." rows={4} />
                </div>
                <button type="submit" className="btn-estate w-full py-3 text-lg">Send Message</button>
                <p className="text-xs text-stone-500 text-center mt-2">We typically respond within 24 hours. For immediate assistance, please call or WhatsApp.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GetInTouch; 