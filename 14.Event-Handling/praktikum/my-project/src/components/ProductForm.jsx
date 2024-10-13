import React, { useState, useRef } from "react";

const ProductForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productNameRef = useRef(null);
  const productCategoryRef = useRef(null);
  const productImageRef = useRef(null);
  const productFreshnessRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);

    if (value.length > 25) {
      alert("Last Name must not exceed 25 characters.");
      setError((prev) => ({
        ...prev,
        productName: "Last Name must not exceed 25 characters.",
      }));
    } else if (value.length > 10) {
      setError((prev) => ({
        ...prev,
        productName: "Product Name is too long (max 10 characters).",
      }));
    } else {
      setError((prev) => ({ ...prev, productName: "" }));
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setProductCategory(value);
    if (value) {
      setError((prev) => ({ ...prev, productCategory: "" }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileName(selectedFile ? selectedFile.name : "No file chosen");
    setError((prev) => ({ ...prev, productImage: "" }));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    setError((prev) => ({ ...prev, description: "" }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    setError((prev) => ({ ...prev, price: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const errors = {};

    if (!productName) {
      errors.productName = "Please enter a valid product name.";
      setError(errors);
      productNameRef.current.focus();
      alert("Please enter a valid product name.");
      return;
    }

    if (!productCategory) {
      errors.productCategory = "Please select a product category.";
      setError(errors);
      productCategoryRef.current.focus();
      alert("Please select a product category.");
      return;
    }

    if (fileName === "No file chosen") {
      errors.productImage = "Please upload an image of the product.";
      setError(errors);
      productImageRef.current.focus();
      alert("Please upload an image of the product.");
      return;
    }

    if (!productFreshness) {
      errors.productFreshness = "Please choose a product freshness.";
      setError(errors);
      productFreshnessRef.current.focus();
      alert("Please choose a product freshness.");
      return;
    }

    if (!description) {
      errors.description = "Please provide additional description.";
      setError(errors);
      descriptionRef.current.focus();
      alert("Please provide additional description.");
      return;
    }

    if (!price) {
      errors.price = "Please enter a valid price.";
      setError(errors);
      descriptionRef.current.focus();
      alert("Please enter a valid price.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      alert("Product created successfully!");
      setProductName("");
      setProductCategory("");
      setDescription("");
      setPrice("");
      setFileName("No file chosen");
      setFreshness("");
      setError({});
      setIsSubmitted(false);
    }
  };

  return (
    <form
      id="productForm"
      className="grid grid-cols-1 gap-y-6 pl-10 pr-10"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl mb-6 col-span-1">Detail Product</h2>

      {/* Product Name Field */}
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
          value={productName}
          onChange={handleProductNameChange}
          ref={productNameRef}
          placeholder="Enter product name"
          className={`w-[282px] px-4 py-2 mb-1 border rounded-md focus:ring focus:ring-bs-blue focus:outline-none ${
            error.productName && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {error.productName && (
          <p className="text-sm mt-1 text-red-500">{error.productName}</p>
        )}
      </div>

      {/* Product Category Field */}
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
          value={productCategory}
          onChange={handleCategoryChange}
          ref={productCategoryRef}
          className={`w-[224px] px-3 py-2 mb-1 border rounded-md focus:ring focus:ring-bs-blue focus:outline-none ${
            error.productCategory && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="">Choose...</option>
          <option value="personal-computer">Personal Computer</option>
          <option value="laptop">Laptop</option>
          <option value="handphone">Handphone</option>
          <option value="tablet">Tablet</option>
          <option value="camera">Camera</option>
        </select>
        {error.productCategory && (
          <p className="text-sm mt-1 text-red-500">{error.productCategory}</p>
        )}
      </div>

      {/* Product Image Field */}
      <div className="col-span-1">
        <label className="block text-base font-medium mb-2">
          Image of Product
        </label>
        <div
          className={`border rounded w-60 ${
            error.productImage && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <input
            type="file"
            id="productImage"
            name="productImage"
            ref={productImageRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex">
            <label
              htmlFor="productImage"
              className="bg-bs-blue text-white py-1 px-[14px] rounded-r-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-bs-blue w-1/2"
            >
              Choose file
            </label>
            <span className="ml-0 text-gray-700 py-1 px-[13px] bg-white border border-gray-300 rounded-l-none w-1/2 overflow-hidden whitespace-nowrap text-ellipsis">
              {fileName}
            </span>
          </div>
        </div>
        {error.productImage && (
          <p className="text-sm mt-1 text-red-500">{error.productImage}</p>
        )}
      </div>

      {/* Product Freshness Field */}
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
              onChange={(e) => setProductFreshness(e.target.value)}
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
              onChange={(e) => setProductFreshness(e.target.value)}
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
              onChange={(e) => setProductFreshness(e.target.value)}
              className="form-radio focus:ring focus:ring-bs-blue focus:outline-none"
            />
            <span className="ml-2">Refurbished</span>
          </label>
        </div>
        {error.productFreshness && (
          <p className="text-sm mt-1 text-red-500">{error.productFreshness}</p>
        )}
      </div>

      {/* Additional Description Field */}
      <div className="col-span-1">
        <label htmlFor="description" className="block text-base mb-1">
          Additional Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          ref={descriptionRef}
          rows="6"
          className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-bs-blue focus:outline-none ${
            error.description && isSubmitted
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {error.description && (
          <p className="text-sm mt-1 text-red-500">{error.description}</p>
        )}
      </div>

      {/* Product Price Field */}
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
            value={price}
            onChange={handlePriceChange}
            ref={priceRef}
            min="1"
            placeholder="1"
            className={`w-full pl-10 pr-3 py-2 border rounded-md focus:ring-bs-blue focus:outline-none ${
              error.price && isSubmitted ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {error.price && (
          <p className="text-sm mt-1 text-red-500">{error.price}</p>
        )}
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
