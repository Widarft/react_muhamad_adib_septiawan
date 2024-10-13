import React from "react";

const ProductForm = () => {
  return (
    <form id="productForm" className="grid grid-cols-1 gap-y-6 pl-10 pr-10">
      <h2 className="font-bold text-2xl mb-6 col-span-1">Detail Product</h2>

      <div className="col-span-1">
        <label
          htmlFor="productName"
          className="block text-base font-medium mb-1"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          minLength="6"
          placeholder="Enter product name"
          className="w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-bs-blue focus:outline-none peer"
        />
      </div>

      <div className="col-span-1">
        <label
          htmlFor="productCategory"
          className="block text-base font-medium"
        >
          Product Category
        </label>
        <select
          id="productCategory"
          name="productCategory"
          className="w-[224px] px-3 py-2 mb-1 border border-gray-300 rounded-md focus:ring focus:ring-bs-blue focus:outline-none"
        >
          <option value="">Choose...</option>
          <option value="personal-computer">Personal Computer</option>
          <option value="laptop">Laptop</option>
          <option value="handphone">Handphone</option>
          <option value="tablet">Tablet</option>
          <option value="camera">Camera</option>
        </select>
      </div>

      <div className="col-span-1">
        <label className="block text-base font-medium mb-2">
          Image of Product
        </label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          className="w-[202px] text-sm mb-1 border text-bs-blue border-bs-blue rounded-[4px] cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-bs-blue"
        />
      </div>

      <div className="col-span-1">
        <label className="block text-base font-medium mb-1">
          Product Freshness
        </label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="freshness"
              value="brandNew"
              className="form-radio focus:ring focus:ring-bs-blue focus:outline-none"
            />
            <span className="ml-2">Brand New</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="freshness"
              value="secondHand"
              className="form-radio focus:ring focus:ring-bs-blue focus:outline-none"
            />
            <span className="ml-2">Second Hand</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="freshness"
              value="refurbished"
              className="form-radio focus:ring focus:ring-bs-blue focus:outline-none"
            />
            <span className="ml-2">Refurbished</span>
          </label>
        </div>
      </div>

      <div className="col-span-1">
        <label htmlFor="description" className="block text-base mb-1">
          Additional Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-bs-blue focus:outline-none"
        />
      </div>

      <div className="col-span-1">
        <label htmlFor="price" className="block text-base font-medium mb-1">
          Product Price
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            $
          </span>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            placeholder="1"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-bs-blue focus:outline-none"
          />
        </div>
      </div>

      <div className="col-span-1 flex justify-center">
        <button
          type="submit"
          className="w-11/12 bg-bs-blue text-white py-2 px-4 my-[124px] rounded-md hover:bg-blue-hover-btn"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
