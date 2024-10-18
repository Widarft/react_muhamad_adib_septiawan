import React from "react";
import { useNavigationUtils } from "../hook/navigationUtils";

const Header = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <header className="h-16 w-full p-4 bg-white items-center shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="font-roboto text-[24px]">Simple header</h1>
        <ul id="nav-links" className="flex space-x-4 text-[16px]">
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "#" },
            { name: "Pricing", path: "#" },
            { name: "FAQs", path: "#" },
            { name: "About", path: "#" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigateTo(item.path)}
                className="text-bs-blue hover:bg-bs-blue hover:text-white px-4 py-2 rounded-md focus:outline-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
