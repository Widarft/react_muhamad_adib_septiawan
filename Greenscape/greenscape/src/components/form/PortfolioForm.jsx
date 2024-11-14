import React, { useState } from "react";
import usePortfolioStore from "../../store/usePortfolioStore";

const PortfolioForm = () => {
  const { addPortfolio } = usePortfolioStore();

  const initialFormState = {
    title: "",
    imageFile: null,
    location: "",
    clientName: "",
    startDate: "",
    endDate: "",
    description: "",
    category: "Reforestation",
  };

  const [form, setForm] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPortfolio(form);
    fetchPortfolios();
    setForm(initialFormState);
    setImagePreview(null);
    alert("Project added successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10 text-center text-main-green">
        ADD NEW PROJECT
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="file"
          name="imageFile"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md"
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
        >
          <option value="Reforestation">Reforestation</option>
          <option value="Landscape">Landscape</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 mt-10 font-semibold bg-dark-orange text-main-black rounded-md hover:bg-light-orange"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
