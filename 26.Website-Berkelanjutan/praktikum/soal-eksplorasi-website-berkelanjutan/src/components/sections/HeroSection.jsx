import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-lime-700 min-h-screen flex items-center">
        <div className="container mx-auto flex justify-around flex-col md:flex-row items-center px-6 md:px-12">
          <div className="text-center md:text-left md:w-1/2 max-w-md">
            <h1 className="text-emerald-100 text-7xl font-bold">Hello there</h1>
            <p className="py-6 text-emerald-100 text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="text-emerald-200 bg-green-900 hover:bg-green-800 p-3 rounded-lg transition duration-200">
              Get Started
            </button>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="./public/images/Forest.jpg"
              alt="Hero Image"
              className="w-full max-w-xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
