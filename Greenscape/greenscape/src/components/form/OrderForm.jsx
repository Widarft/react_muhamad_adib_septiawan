import React, { useState } from "react";
import useOrderStore from "../../store/useOrderStore";
import OrderFormModal from "../modal/OrderFormModal";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    packageType: "",
    startDate: "",
    budget: "",
  });
  const { addOrder, loading, error } = useOrderStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "budget") {
      const numericValue = value.replace(/\D/g, ""); // Delete character non-numerik
      const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Formatting with a dot as the thousands separator
      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d+$/.test(formData.phone)) {
      alert("Phone number must contain only numbers.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formData.budget && isNaN(formData.budget.replace(/\./g, ""))) {
      alert("Budget range must be a valid number.");
      return;
    }

    setModalOpen(true);
  };

  const confirmSubmit = () => {
    const formattedData = {
      ...formData,
      budget: formData.budget
        ? Number(formData.budget.replace(/\./g, ""))
        : null,
    };

    addOrder(formattedData); // Send order data to store

    // Empty the form after submitting
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "",
      packageType: "",
      startDate: "",
      budget: "",
    });
    setIsSubmitted(true);
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-blue">
      <form
        className="w-[90vw] max-w-4xl bg-white shadow-lg p-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold my-6 text-center text-main-green">
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

        {/* Services Type */}
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

        {/* Date Start */}
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

        {/* Package and Budget */}
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
            </select>
          </div>
        ) : (
          <div className="mb-4 relative">
            <label className="block mb-2">Estimated Budget:</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                Rp.
              </span>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 p-2 border rounded"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full p-2 ${
            loading ? "bg-gray-400" : "bg-dark-orange"
          } text-main-black hover:bg-light-orange font-semibold rounded my-5`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>

        {/* Feedback success */}
        {isSubmitted && (
          <p className="text-light-green mb-2 text-center">
            Order has been successfully submitted!
          </p>
        )}

        {/* Error handling */}
        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
      </form>
      <OrderFormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmSubmit}
      />
    </div>
  );
};

export default OrderForm;
