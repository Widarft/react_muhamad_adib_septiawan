import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/section/HeroSection";
import NewsLetterSection from "../components/section/NewsLetterSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <NewsLetterSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
