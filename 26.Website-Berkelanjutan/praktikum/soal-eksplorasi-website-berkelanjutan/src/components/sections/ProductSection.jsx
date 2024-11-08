import React from "react";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Solar Panel",
      description:
        "Panel surya yang efisien untuk mengubah sinar matahari menjadi energi listrik.",
      price: "Rp 5.000.000",
      image: "./public/images/Solar-Panel.jpg",
    },
    {
      id: 2,
      name: "Wind Turbine",
      description:
        "Turbin angin yang dirancang untuk menghasilkan listrik dari angin.",
      price: "Rp 10.000.000",
      image: "./public/images/wind-turbine.webp",
    },
    {
      id: 3,
      name: "LED Bulb",
      description:
        "Lampu LED hemat energi yang tahan lama dan ramah lingkungan.",
      price: "Rp 50.000",
      image: "./public/images/led-blub.webp",
    },
    {
      id: 4,
      name: "Eco-Friendly Battery",
      description: "Baterai ramah lingkungan dengan daya tahan tinggi.",
      price: "Rp 200.000",
      image: "./public/images/eco-battery.webp",
    },
  ];

  return (
    <section className="w-full p-10 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-green-900 mb-6 text-center">
        Produk GreenTech
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700 text-sm mb-2">{product.description}</p>
            <p className="text-green-700 font-bold mb-4">{product.price}</p>
            <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
