import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 px-4 bg-second-cream text-main-black">
      {/* Section About Us */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Gambar Kiri */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <img
            src="/assets/img/image-aboutus-2.png"
            alt="Nature Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Teks Kanan */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h3 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold mb-6">
            ABOUT US
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            We are a team of nature enthusiasts dedicated to creating beautiful,
            sustainable landscapes in every project we take on. Born from a
            passion for blending aesthetics with eco-friendly practices, our
            mission is to design green spaces that enrich lives and nurture the
            environment. Through reforestation efforts, native plant selection,
            and innovative landscape techniques, we deliver services that bring
            vibrancy and balance to every garden. For us, each landscape is more
            than just a project—it's our contribution to a greener future.
          </p>
        </div>
      </div>

      {/* Section Crafting Beauty */}
      <div className="max-w-7xl pt-20 mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Gambar Kanan */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img
            src="/assets/img/image-aboutus-1.png"
            alt="Garden Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-full shadow-lg"
          />
        </div>
        {/* Teks Kiri */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h3 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold mb-6">
            CRAFTING BEAUTY IN HARMONY WITH NATURE
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            With years of experience and a commitment to excellence, we
            specialize in designing landscapes that are as functional as they
            are beautiful. Our team combines creative vision with practical
            expertise to bring your dream garden to life, whether it's a
            tranquil retreat, a vibrant family space, or a lush restoration
            project. We believe that every outdoor area has the potential to
            inspire and rejuvenate, and we're here to turn that potential into
            reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
