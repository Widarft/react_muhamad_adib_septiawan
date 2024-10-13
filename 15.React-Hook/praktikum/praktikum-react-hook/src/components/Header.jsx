import React from "react";

const Header = () => {
  return (
    <header className="h-[60px] w-full p-4 bg-white items-center shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="font-roboto text-[24px]">Simple header</h1>
        <ul id="nav-links" className="flex space-x-4 text-[16px]">
          {["Home", "Features", "Pricing", "FAQs", "About"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-bs-blue hover:bg-bs-blue hover:text-white px-[16px] py-[12px] rounded-md"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
