import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WelcomeSection from "../components/section/WelcomeSection";
import ContactForm from "../components/form/ContactForm";
import AboutUsSection from "../components/section/AboutUsSection";
import QuotesSection from "../components/section/QuotesSection";

const WelcomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);
  return (
    <div className="bg-white-background">
      <Header />
      <br />
      <WelcomeSection />
      <ContactForm />
      <AboutUsSection />
      <QuotesSection />
      <Footer />
    </div>
  );
};

export default WelcomePage;
