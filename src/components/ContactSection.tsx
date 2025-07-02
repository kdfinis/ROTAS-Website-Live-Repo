
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with Formspree or Netlify Forms
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-navy-800">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wider mb-6">
            GET IN
            <span className="block text-gold font-medium">TOUCH</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto tracking-wide">
            Ready to explore these exceptional properties? Contact us to schedule a private viewing or discuss investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-white tracking-wider mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-white/80">+352 621 815 753 (Luxembourg)</p>
                    <p className="text-white/80">+385 98 432 648 (Croatia)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:karlodefinis@gmail.com"
                      className="text-white/80 hover:text-gold transition-colors"
                    >
                      karlodefinis@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/352621815753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-gold transition-colors"
                    >
                      Click to chat instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-white/80">Croatian Adriatic Coast</p>
                    <p className="text-white/80 text-sm">Exact location provided upon inquiry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-white font-medium tracking-wider">QUICK CONTACT</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://wa.me/352621815753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury flex items-center justify-center"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Message on WhatsApp
                </a>
                <a
                  href="tel:+352621815753"
                  className="btn-outline-luxury flex items-center justify-center border-white text-white hover:bg-white hover:text-navy-800"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-medium text-white tracking-wider mb-6">
              Schedule a Viewing
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-white/80 text-sm font-medium mb-2">
                    Preferred Viewing Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="Tell us about your interest in the properties..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-luxury flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>

            <p className="text-white/60 text-sm mt-4 text-center">
              We typically respond within 24 hours. For immediate assistance, please call or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
