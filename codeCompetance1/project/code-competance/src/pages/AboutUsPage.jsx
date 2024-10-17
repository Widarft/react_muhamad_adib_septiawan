import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsHeroSection from "../components/section/AboutUsHeroSection";
import ProfileSection from "../components/section/ProfileSection";
const AboutUsPage = () => {
  return (
    <div className="bg-white-background">
      <Header />
      <br />
      <AboutUsHeroSection />
      <ProfileSection />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
