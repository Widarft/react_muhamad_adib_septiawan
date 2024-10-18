import React from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const HeroSection = () => {
  const { navigateTo } = useNavigationUtils();

  return (
    <div>
      <section class="h-[760px] w-[1440px] hero bg-blue-bg-hero text-white pl-[82px] pt-[153px] pr-[83px] pb-[81px] flex flex-col lg:flex-row items-center justify-between gap-x-6">
        <div class="hero-content text-center lg:text-left max-w-screen-xl">
          <h2 class="text-4xl lg:text-5xl mb-4 font-bold">
            Better Solutions For Your Business
          </h2>
          <p class="text-lg lg:text-xl pb-[47.8px] text-white/75">
            We are a team of talented designers making websites with Bootstrap
          </p>
          <div class="flex space-x-4 justify-center lg:justify-start">
            <button
              onClick={() => navigateTo("/createproduct")}
              class="button-started hover:bg-blue-hover-btn text-white py-2 px-4 rounded-full"
            >
              Get Started
            </button>
            <button
              onClick={() => navigateTo("#")}
              class="button-video hover:bg-blue-hover-btn text-white py-2 px-4 rounded-full"
            >
              Watch Video
            </button>
          </div>
        </div>
        <div class="hero-img mt-8 lg:mt-0">
          <img
            src="./src/assets/img/hero-img.png.png"
            alt="Image"
            class="w-full max-w-3xl"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
