import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WelcomeSection from "../components/section/WelcomeSection";
import ContactForm from "../components/form/ContactForm";
import AboutUsSection from "../components/section/AboutUsSection";

const WelcomePage = () => {
  return (
    <div className="bg-white-background">
      <Header />
      <br />
      <WelcomeSection />
      <ContactForm />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default WelcomePage;
