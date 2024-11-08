import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import ContactUsSection from "../components/sections/ContactUsSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
