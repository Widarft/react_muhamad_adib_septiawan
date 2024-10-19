import React from "react";

const NewsLetterSection = () => {
  return (
    <div>
      <section className="h-[239px] w-[1440px] newsletter bg-white-news pl-[426px] pt-[50px] pr-[355px] pb-[50px] text-center">
        <h3 className="font-jost text-2xl text-blue-bg-hero pb-[16px]">
          Join Our Newsletter
        </h3>
        <p className="font-openSans text-gray-news pb-[31.5px]">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form className="newsletter-form flex justify-center items-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="email"
              className="p-3 rounded-full w-full border border-white shadow-md pr-32"
            />
            <button
              type="submit"
              className="font-openSans absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-blue-hover-btn hover:bg-bs-blue border border-blue-hover-btn py-3 px-8 rounded-full shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewsLetterSection;
