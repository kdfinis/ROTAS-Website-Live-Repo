
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PropertiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
