import React, { useState, useRef } from "react";
import AddPortfolioModal from "../modal/AddPortfolioModal";
import usePortfolioStore from "../../store/usePortfolioStore";

const PortfolioForm = () => {
  const { addPortfolio, loading, error } = usePortfolioStore();

  const initialFormState = {
    title: "",
    imageFile: null,
    location: "",
    clientName: "",
    startDate: "",
    endDate: "",
    description: "",
    category: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setForm({ ...form, imageFile: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a JPG or PNG file.");
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmSubmission = async () => {
    await addPortfolio(form);
    setForm(initialFormState);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10 text-center text-main-green">
        ADD NEW PROJECT
      </h1>
      <form onSubmit={openModal} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="file"
          name="imageFile"
          accept="image/jpeg, image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover my-4"
          />
        )}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
        ></textarea>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Service</option>
          <option value="Reforestation">Reforestation</option>
          <option value="Landscape">Landscape</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`px-4 py-2 ${
              loading ? "bg-gray-400" : "bg-dark-orange"
            } text-main-black hover:bg-light-orange font-semibold rounded my-5`}
            disabled={loading}
          >
            {loading ? "Adding Project..." : "Add Project"}
          </button>
          {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
        </div>
      </form>

      {/* Modal */}
      <AddPortfolioModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmSubmission}
      />
    </div>
  );
};

export default PortfolioForm;
