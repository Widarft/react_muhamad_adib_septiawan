import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";

const PortfolioCardSection = ({ portfolio }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    navigate(`/portfolio/${portfolio.id}`);
  };

  const getShortDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return description;
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border bg-white border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl  transform transition-transform duration-300 hover:scale-105 "
    >
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-75 z-10">
            <LoadingSpinner />{" "}
          </div>
        )}
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="w-full h-48 object-cover"
          onLoad={handleImageLoad}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {portfolio.title}
        </h2>

        <p className="text-gray-600">
          {getShortDescription(portfolio.description)}
        </p>

        <p className="text-gray-500 text-sm mt-2">
          <strong>Client:</strong> {portfolio.clientName}
        </p>

        <p className="text-gray-500 text-sm">
          <strong>Location:</strong> {portfolio.location}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCardSection;
