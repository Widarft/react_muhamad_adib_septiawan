import React, { useState } from "react";
import useOrderStore from "../../store/useOrderStore";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    packageType: "",
    startDate: "",
    budgetRange: "",
  });

  const { addOrder } = useOrderStore();

  // Handle Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(formData);
    alert("Order has been successfully submitted!");
    setFormData({});
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-blue">
      <form
        className="w-[90vw] max-w-4xl bg-white shadow-lg p-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-main-green">
          ORDER FORM
        </h2>

        {/* Contact Information */}
        <div className="mb-4">
          <label className="block mb-2">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Project Location */}
        <div className="mb-4">
          <label className="block mb-2">Full Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Service Type */}
        <div className="mb-4">
          <label className="block mb-2">Service Type:</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Service</option>
            <option value="Reforestation">Reforestation</option>
            <option value="Landscape">Landscape Gardening</option>
            <option value="Maintenance">Garden Maintenance</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block mb-2">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Budget Estimate */}
        {formData.serviceType === "Maintenance" ? (
          <div className="mb-4">
            <label className="block mb-2">Maintenance Package:</label>
            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Maintenance Package</option>
              <option value="Basic">Basic Package</option>
              <option value="Premium">Premium Package</option>
              <option value="Exclusive">Exclusive Package</option>
            </select>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block mb-2">Budget Range:</label>
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Budget</option>
              <option value="Under 5M">Under 5 Million</option>
              <option value="5M - 10M">5 Million - 10 Million</option>
              <option value="Above 10M">Above 10 Million</option>
            </select>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 mt-10 bg-dark-orange text-main-black font-bold rounded hover:bg-light-orange transition"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
