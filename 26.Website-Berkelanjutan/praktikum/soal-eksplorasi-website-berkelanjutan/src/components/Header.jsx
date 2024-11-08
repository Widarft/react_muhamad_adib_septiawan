import React, { useState } from "react";
import { useNavigationUtils } from "./hook/navigationUtils";

const Header = () => {
  const { navigateTo } = useNavigationUtils();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-20 w-full p-4 bg-green-900 items-center shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="font-roboto text-[24px] text-emerald-100">GreenTech</h1>

        <button
          className="block md:hidden text-emerald-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ul
          id="nav-links"
          className="hidden md:flex space-x-4 text-[16px] text-emerald-100"
        >
          {[
            { name: "Home", path: "/" },
            { name: "Product", path: "/products" },
            { name: "About", path: "/about" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigateTo(item.path)}
                className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-md focus:outline-none transition duration-200"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {isMenuOpen && (
          <ul className="absolute top-20 right-4 w-48 bg-green-800 border border-green-950 shadow-lg md:hidden text-emerald-100">
            {[
              { name: "Home", path: "/" },
              { name: "Product", path: "/products" },
              { name: "About", path: "/about" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    navigateTo(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 border border-green-950 hover:bg-green-700 focus:outline-none"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
