import React from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const HeroSection = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <div>
      <section className="h-[760px] w-full bg-main-green text-white px-8 pl-[81px] pr-[0px] flex flex-col lg:flex-row items-center justify-between gap-x-6">
        {/* Text Content */}
        <div className="lg:w-1/2 max-w-screen-md">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold text-light-green">
            LET'S BUILD <br /> GREENER SPACES <br /> TOGETHER
          </h2>
          <p className="text-base text-second-cream mb-8">
            WE BELIEVE IN CREATING LANDSCAPES THAT NOT ONLY ENHANCE YOUR
            PROPERTY BUT ALSO CONTRIBUTE TO A HEALTHIER PLANET.
          </p>
          <p className="text-base text-second-cream mb-8">
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
        <div className="lg:w-1/2">
          <img
            src="/assets/img/hero-image.png"
            alt="Landscaping Image"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
