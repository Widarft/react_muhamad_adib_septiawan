import React from "react";

const AboutUsSection = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white-background">
      <div
        className="relative w-full max-w-[1325px] p-16 rounded-3xl"
        style={{ backgroundImage: "url('./src/assets/image/grid.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black opacity-90 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 text-white grid grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-normal mb-12">About us</h1>
            <p className="text-4xl font-normal mb-6">Hallo Semua!</p>
            <p className="text-lg mb-6">
              Website ini dibuat oleh saya untuk memperlihatkan sedikit profile
              dan kemampuan saya selama belajar di Alterra Academy sebagai
              Front-End Developer.
            </p>
            <p className="text-lg mb-6 text-gray-400">Be Creative</p>
            <p className="text-lg text-gray-400">
              Let's connect and know more about me
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg mb-4 text-center">
              Jika kalian penasaran tentangku <br /> ayo klik tombol dibawah
              ini!
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-bold border-2 border-black shadow-lg flex items-center hover:bg-gray-200 transition duration-300">
              ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
