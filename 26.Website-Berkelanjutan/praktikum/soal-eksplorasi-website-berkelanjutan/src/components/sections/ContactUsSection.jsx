import React from "react";

const ContactUsSection = () => {
  return (
    <div className="flex justify-center w-full bg-green-50">
      <div className="w-full max-w-4xl p-6 bg-green-50">
        <h2 className="text-3xl font-semibold text-green-900 mb-4 text-center">
          Contact Us
        </h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan nama Anda"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email Anda"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Massage
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-emerald-200 bg-green-900 hover:bg-green-800  py-3 rounded-lg transition duration-200"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
