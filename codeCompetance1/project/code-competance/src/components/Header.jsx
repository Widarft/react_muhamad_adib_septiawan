import React from "react";

const Header = () => {
  return (
    <header className="bg-white-background py-4 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">ADIB.COM</div>

        {/* Navigation */}
        <nav className="flex space-x-0 border-2 border-black rounded-full">
          <a
            href="#home"
            className="px-4 py-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in"
          >
            HOME
          </a>
          <a
            href="#contact"
            className="px-4 py-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in"
          >
            CONTACT
          </a>
          <a
            href="#about"
            className="px-4 py-2 hover:border-2 hover:border-black hover:rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in"
          >
            ABOUT
          </a>
        </nav>

        {/* Login Button */}
        <div>
          <button className="px-6 py-2 bg-black text-white rounded-full hover:rounded-lg transition-all duration-200 ease-in-out">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
