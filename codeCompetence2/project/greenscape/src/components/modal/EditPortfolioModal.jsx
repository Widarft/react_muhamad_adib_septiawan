import React, { useState } from "react";
import usePortfolioStore from "../../store/usePortfolioStore";

const EditPortfolioModal = ({ portfolio, onClose }) => {
  const { updatePortfolio } = usePortfolioStore();
  const [formData, setFormData] = useState({
    title: portfolio.title,
    imageFile: null,
    location: portfolio.location,
    clientName: portfolio.clientName,
    startDate: portfolio.startDate,
    endDate: portfolio.endDate,
    category: portfolio.category,
    description: portfolio.description,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePortfolio({ ...formData, id: portfolio.id });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-main-green">
          Edit Portfolio
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Input Title */}
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Input Image */}
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <p className="text-gray-700">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-full h-32 object-cover mt-2 rounded"
              />
            </div>
          )}

          {/* Input Location */}
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Input Client Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Input Start Date */}
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Input End Date */}
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Input Category */}
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="Reforestation">Reforestation</option>
              <option value="Landscape">Landscape</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Input Description */}
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-200 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPortfolioModal;
