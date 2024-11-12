import React, { useState } from "react";
import { useNavigationUtils } from "../../hook/navigationUtils";

const OurServicesSection = () => {
  const { navigateTo } = useNavigationUtils();

  const services = [
    {
      title: "REFORESTATION",
      image: "/assets/img/service-reforestation.png",
      description:
        "Our reforestation services focus on restoring green spaces using native plants, promoting biodiversity, and enhancing the ecosystem's health.",
    },
    {
      title: "LANDSCAPING",
      image: "/assets/img/service-landscaping.png",
      description:
        "Transform your outdoor space with our expert landscaping services, combining aesthetic design with sustainable practices for a beautiful and eco-friendly environment.",
    },
    {
      title: "MAINTENANCE",
      image: "/assets/img/service-maintenance.png",
      description:
        "Keep your green spaces thriving with our regular maintenance services, ensuring healthy growth and the longevity of your plants.",
    },
  ];

  // State untuk modal
  const [selectedService, setSelectedService] = useState(null);

  // Fungsi untuk menutup modal
  const closeModal = () => setSelectedService(null);

  return (
    <section className="py-20 px-4 bg-dark-cream text-main-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul Section */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-20">
          OUR SERVICES
        </h3>

        {/* Kartu Layanan */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pb-20">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="relative w-full md:w-1/3 h-[250px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Gambar Latar Belakang */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Transparan */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h4 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Deskripsi Layanan */}
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            At Greenscape, we believe in the power of nature to transform spaces
            and enrich lives. Through our comprehensive reforestation efforts,
            creative landscape design, and dedicated maintenance services, we
            offer sustainable solutions that not only beautify your surroundings
            but also support environmental health. Together, let's build
            greener, more sustainable spaces for future generations.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">
              {selectedService.title}
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              {selectedService.description}
            </p>
            <button
              onClick={() => {
                navigateTo("/createProduct");
                closeModal();
              }}
              className="w-full px-6 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServicesSection;
