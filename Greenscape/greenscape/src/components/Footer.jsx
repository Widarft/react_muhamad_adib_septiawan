import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main-black text-second-cream py-20 px-8">
      <div className="container pt-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
        {/* Links Section - Product, Contact, Social */}
        <div className="flex flex-col lg:flex-row w-full justify-between lg:items-start lg:space-x-16 gap-8 lg:gap-16">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo/logo-second.png" alt="GreenScape Logo" />
            </div>
            <p className="text-base mt-2">
              Transforming Spaces, Enriching Nature
            </p>
          </div>
          {/* Product Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-2 text-lg">OUR PRODUCT</h3>
            <ul className="space-y-1 text-base">
              <li>Features</li>
              <li>Pricing</li>
              <li>Book a demo</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-2 text-lg">CONTACT US</h3>
            <p className="text-base">
              Jl. Sungai Buntu, Kutawaluya <br />
              Karawang, Jawa Barat
            </p>
            <p className="text-sm mt-2">(+62) 812-4875-3201</p>
            <a href="https://wa.me/6281248758201" target="_blank">
              <button className="mt-4 px-4 py-2 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange">
                CONTACT
              </button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-2 text-lg">
              FOLLOW OUR SOCIAL MEDIA
            </h3>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.linkedin.com/in/muhamad-adib-septiawan-2b719921b/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="/assets/img/Platform=LinkedIn, Color=Negative.png"
                  alt="LinkedIn Icon"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/adib_spt/"
                target="_blank"
                aria-label="Instagram"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="/assets/img/Platform=Instagram, Color=Negative.png"
                  alt="Instagram Icon"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.youtube.com/@adibseptiawan6241"
                target="_blank"
                aria-label="YouTube"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="/assets/img/Platform=YouTube, Color=Negative.png"
                  alt="YouTube Icon"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://github.com/Widarft/react_muhamad_adib_septiawan"
                target="_blank"
                aria-label="GitHub"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="/assets/img/Platform=Github, Color=Negative.png"
                  alt="GitHub Icon"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://wa.me/6281248758201"
                target="_blank"
                aria-label="WhatsApp"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="/assets/img/Platform=WhatsApp, Color=Negative.png"
                  alt="WhatsApp Icon"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
