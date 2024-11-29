import React from "react";
import HeroSection from "../components/section/HeroSection";
import AboutUsSection from "../components/section/AboutUsSection";
import OurServicesSection from "../components/section/OurServicesSection";
import ContactUsSection from "../components/section/ContactUsSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <ContactUsSection />
    </div>
  );
};

export default LandingPage;
