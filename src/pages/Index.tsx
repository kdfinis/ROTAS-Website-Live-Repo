
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <PropertiesSection />
      <Footer />
    </div>
  );
};

export default Index;
