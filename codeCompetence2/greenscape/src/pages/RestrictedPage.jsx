import React from "react";
import { Link } from "react-router-dom";

const RestrictedPage = () => {
  return (
    <div className="bg-gray-blue flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Restricted</h1>
        <p className="text-lg mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="w-full p-4 rounded-lg bg-main-green text-white font-bold flex justify-center items-center shadow-lg hover:bg-blue-hover-btn transition duration-200"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default RestrictedPage;
