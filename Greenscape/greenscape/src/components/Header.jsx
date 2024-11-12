import React from "react";
import { useNavigationUtils } from "../hook/navigationUtils";

const Header = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <header className="h-22 w-full p-4 bg-main-green items-center shadow-lg">
      <nav className="flex items-center justify-between">
        {/* Logo on the left */}
        <img src="./assets/logo/logo.png" alt="logo" className="h-10 w-auto" />

        {/* Navigation links and Order Now button on the right */}
        <div className="flex items-center space-x-4">
          <ul id="nav-links" className="flex text-[16px]">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR WORK", path: "#" },
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
            onClick={() => navigateTo("/createProduct")}
            className="px-6 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange"
          >
            ORDER NOW
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
