import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="bg-white-background flex items-center justify-center h-screen text-center"
      style={{ backgroundImage: "url('./src/assets/image/grid.png')" }}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="w-full p-4 rounded-full bg-black text-white font-bold flex justify-center items-center shadow-lg hover:bg-gray-800 transition duration-200"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
