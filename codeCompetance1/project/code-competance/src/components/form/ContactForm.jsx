import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-40 bg-white-background"
    >
      <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-black w-full max-w-5xl relative">
        <h1 className="text-3xl font-bold mb-6 text-left">CONTACT US</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-black shadow focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              placeholder="Masukkan username anda"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-black shadow focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              placeholder="Masukkan email anda"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-3xl border-2 border-black shadow focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-500"
              placeholder="Apakah ada kendala? Apa yang saya bisa bantu untuk anda."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-black text-white font-bold flex justify-center items-center shadow-lg hover:bg-gray-800 transition duration-200"
          >
            SUBMIT
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Submitted Data:</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
