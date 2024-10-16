import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-background">
      <footer className="bg-black-footer text-white py-11 px-4 mx-12 md:px-8 rounded-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center text-center md:text-left md:col-span-1">
            <img
              src="./src/assets/image/A.png"
              alt="Logo A"
              className="w-[85px] h-[85px] mb-2 filter invert"
            />
            <h2 className="text-base font-semibold pt-5">ADIB.COM</h2>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-lg font-semibold">HALLO SEMUA!</h2>
            <p className="text-sm mt-2 text-gray-font">
              TERIMAKASIH SUDAH BERKUNJUNG DI ADIB.COM, WEBSITE INI DIBUAT UNTUK
              MEMPERKENALKAN PROFILE DARI SALAH SATU MANTEE DARI ACADEMY ALTERA
              YAITU MUHAMAD ADIB SEPTIAWAN.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-font">
            <h3 className="font-semibold mb-4 text-white">HUBUNGI KAMI</h3>
            <p className="text-sm">Jl. Sungai Buntu, Kutawaluya</p>
            <p className="text-sm">Karawang, Jawa Barat</p>
            <br />
            <p className="text-sm">(+62) 812-4875-8201</p>
            <a href="https://wa.me/6281248758201" target="_blank">
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition">
                Contact
              </button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-4">
              IKUTI PERJALANANKU DI MEDIA SOSIAL
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/muhamad-adib-septiawan-2b719921b/"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="./src/assets/image/Platform=LinkedIn, Color=Negative.png"
                  alt="Linked Icon"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.instagram.com/adib_spt/"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="./src/assets/image/Platform=Instagram, Color=Negative.png"
                  alt="Instagram Icon"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.youtube.com/@adibseptiawan6241"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="./src/assets/image/Platform=YouTube, Color=Negative.png"
                  alt="YouTube Icon"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://github.com/Widarft/react_muhamad_adib_septiawan"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <img
                  src="./src/assets/image/Platform=Github, Color=Negative.png"
                  alt="Git Icon"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://wa.me/6281248758201"
                target="_blank"
                className="w-5 h-5"
              >
                <img
                  src="./src/assets/image/Platform=WhatsApp, Color=Negative.png"
                  alt="WhatsApp Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
