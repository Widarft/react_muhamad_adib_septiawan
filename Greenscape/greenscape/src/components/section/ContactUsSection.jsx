import React from "react";

const ContactUsSection = () => {
  return (
    <section className="py-16 px-4 bg-main-green flex flex-col lg:flex-row items-center justify-center">
      {/* Bagian Gambar */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <div className="relative">
          <img
            src="/assets/img/image-contact.png"
            alt="Forest Background"
            className="w-[450px] h-[450px] lg:w-[460px] lg:h-[460px] object-cover"
          />
          <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-light-green">
            CONTACT <span className="text-white ml-2">US</span>
          </h3>
        </div>
      </div>

      {/* Bagian Form */}
      <div className="max-w-md w-full bg-gray-blue p-8 shadow-lg">
        {/* Form Kontak */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
