import React from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const HeroSection = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <div>
      <section className="h-[760px] w-[1440px] hero bg-blue-bg-hero text-white pl-[82px] pt-[153px] pr-[83px] pb-[81px] flex flex-col lg:flex-row items-center justify-between gap-x-6">
        <div className="hero-content text-center lg:text-left max-w-screen-xl">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold">
            Better Solutions For Your Business
          </h2>
          <p className="text-lg lg:text-xl pb-[47.8px] text-white/75">
            We are a team of talented designers making websites with Bootstrap
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button
              onClick={() => navigateTo("/createproduct")}
              className="button-started hover:bg-blue-hover-btn text-white py-2 px-4 rounded-full"
            >
              Get Started
            </button>
            <button
              onClick={() => navigateTo("#")}
              className="button-video hover:bg-blue-hover-btn text-white py-2 px-4 rounded-full"
            >
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero-img mt-8 lg:mt-0">
          <img
            src="/assets/img/hero-img.png.png"
            alt="Image"
            className="w-full max-w-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
