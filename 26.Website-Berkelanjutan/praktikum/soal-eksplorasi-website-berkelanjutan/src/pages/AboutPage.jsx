import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/sections/AboutSection";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
