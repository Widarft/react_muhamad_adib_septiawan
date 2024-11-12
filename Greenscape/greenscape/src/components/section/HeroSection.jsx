import React from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const HeroSection = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <div>
      <section className="w-full h-[760px] bg-main-green text-white px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-y-8 lg:gap-x-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 max-w-screen-md text-center lg:text-left px-4 lg:px-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-light-green">
            LET'S BUILD <br /> GREENER SPACES <br /> TOGETHER
          </h2>
          <p className="text-sm md:text-base text-second-cream mb-6">
            WE BELIEVE IN CREATING LANDSCAPES THAT NOT ONLY ENHANCE YOUR
            PROPERTY BUT ALSO CONTRIBUTE TO A HEALTHIER PLANET.
          </p>
          <p className="text-sm md:text-base text-second-cream mb-6">
            OUR ECO-CONSCIOUS LANDSCAPING SERVICES PRIORITIZE NATIVE PLANTS,
            SUSTAINABLE MATERIALS, AND INNOVATIVE GREEN SOLUTIONS THAT PROMOTE
            BIODIVERSITY.
          </p>
          <button
            onClick={() => navigateTo("/createProduct")}
            className="mt-4 px-6 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange"
          >
            ORDER NOW
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 lg:px-8">
          <img
            src="/assets/img/hero-image.png"
            alt="Landscaping Image"
            className="w-3/4 md:w-2/3 lg:w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
