import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigationUtils } from "../hook/navigationUtils";
import useProductStore from "../store/useProductStore";

const ProductDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { navigateTo } = useNavigationUtils();
  const products = useProductStore((state) => state.products);
  const product = products.find((p) => p.id.toString() === id);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  const handleBack = () => {
    navigateTo("/createProduct");
  };

  console.log("ID from URL:", id);
  console.log("Product found:", product);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return (
      <div className="bg-white-news flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Product not found!</h2>
          <p className="text-lg mb-8">
            Oops! The product you're looking for doesn't exist.
          </p>
          <button
            onClick={handleBack}
            className="w-full p-4 rounded-lg bg-bs-blue text-white font-bold flex justify-center items-center shadow-lg hover:bg-blue-hover-btn transition duration-200"
          >
            Back to Product Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white-news flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-10 text-center">Product Detail</h1>
        <p className="mb-2">
          <strong>ID:</strong> {product.id}
        </p>
        <p className="mb-2">
          <strong>Product Name:</strong> {product.productName}
        </p>
        <p className="mb-2">
          <strong>Category:</strong> {product.productCategory}
        </p>
        <p className="mb-2">
          <strong>Freshness:</strong> {product.productFreshness}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {product.description}
        </p>
        <p className="mb-4">
          <strong>Price:</strong> ${product.price}
        </p>
        {product.productImage && (
          <img
            src={product.productImage}
            alt="Product"
            className="mb-4 w-40 h-40 object-cover mx-auto"
          />
        )}
        <div className="flex justify-center">
          <button
            onClick={handleBack}
            className="mt-6 px-6 py-2 bg-bs-blue text-white font-semibold rounded-lg hover:bg-blue-hover-btn"
          >
            Back to Product Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
