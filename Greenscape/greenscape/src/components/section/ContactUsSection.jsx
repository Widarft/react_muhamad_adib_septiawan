import React, { useState } from "react";
import { sendEmail } from "../../service/emailConfig";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit for send massage to email
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      // Make sure that email addres was correct
      alert("Please enter a valid email address.");
      return;
    }
    try {
      // Send massage to email wirh emailjs
      const response = await sendEmail(formData);
      console.log("SUCCESS!", response.status, response.text);
      setIsSent(true);
    } catch (error) {
      console.error("FAILED...", error);
    }
  };

  return (
    <section className="py-16 px-4 bg-main-green flex flex-col lg:flex-row items-center justify-center">
      {/* Image Content */}
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

      <div className="max-w-md w-full bg-gray-blue p-6 shadow-lg">
        {/* Input Form Contact Us */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Enter your full name"
              required
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
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Enter your email"
              required
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
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-orange"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-dark-orange text-main-black font-medium rounded-md hover:bg-light-orange transition duration-300"
          >
            SUBMIT
          </button>
        </form>
        {/* Succes Massage */}
        <div className="relative mt-4">
          {isSent && (
            <p className="text-light-green absolute inset-0 flex items-center justify-center">
              Your message has been sent!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
