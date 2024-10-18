import React from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationUtils } from "../hook/navigationUtils";

const AboutUsHeroSection = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <section
      className="flex items-center justify-between px-32 py-60 bg-white-background"
      style={{ backgroundImage: "url('./src/assets/image/grid.png')" }}
    >
      {/* Left Side */}
      <div className="space-y-4">
        <h1 className="text-8xl font-bold">About</h1>
        <h2 className="text-8xl font-light text-gray-400">us</h2>
      </div>

      {/* Right Side */}
      <div>
        <button
          onClick={() => navigateTo("/")}
          className="bg-white-background inline-flex items-center justify-center px-8 py-4 border-2 border-black rounded-full text-black font-semibold transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          BACK HOME
          <svg
            className="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h12.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L14.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
