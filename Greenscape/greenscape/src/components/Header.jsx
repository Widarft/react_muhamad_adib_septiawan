import React, { useState } from "react";
import { useNavigationUtils } from "../hook/navigationUtils";

const Header = () => {
  const { navigateTo } = useNavigationUtils();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-22 w-full p-4 bg-main-green shadow-lg">
      <nav className="flex items-center justify-between">
        {/* Logo on the left */}
        <img src="./assets/logo/logo.png" alt="logo" className="h-10 w-auto" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <ul id="nav-links" className="flex text-[16px]">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR WORK", path: "/portofolio" },
              { name: "CHAT NOW", path: "/aiproductchat" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => navigateTo(item.path)}
                  className="text-second-cream hover:bg-second-cream hover:text-main-green px-4 py-2 rounded-md focus:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigateTo("/inputorder")}
            className="px-6 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange"
          >
            ORDER NOW
          </button>
        </div>

        {/* Burger Button for Mobile View */}
        <button
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={handleToggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={handleToggleMenu}
          >
            &times;
          </button>

          <ul className="flex flex-col items-center space-y-6">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR WORK", path: "portofolio" },
              { name: "CHAT NOW", path: "/aiproductchat" },
              { name: "ORDER NOW", path: "/inputorder" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    navigateTo(item.path);
                    handleToggleMenu();
                  }}
                  className="text-second-cream text-xl hover:bg-second-cream hover:text-main-green px-6 py-3 rounded-md"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
