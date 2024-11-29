import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import usePortfolioStore from "../store/usePortfolioStore";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { portfolios, fetchPortfolios } = usePortfolioStore();
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();

  // Use for fetch data from storage
  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  // Find and set the portfolio item matching the `id` from the URL
  useEffect(() => {
    const selectedPortfolio = portfolios.find((item) => item.id === id);
    if (selectedPortfolio) {
      setPortfolio(selectedPortfolio);
    }
  }, [id, portfolios]);

  if (!portfolio) return <LoadingSpinner />;

  return (
    <div className="bg-gray-blue py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
        <div className="container px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="text-main-green text-xl mb-6 flex items-center space-x-2"
          >
            <IoArrowBack />
            <span>Back</span>
          </button>

          <h1 className="text-4xl text-center font-semibold text-main-green mb-10">
            {portfolio.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">Location:</p>
                <p className="text-gray-600">{portfolio.location}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Client Name:
                </p>
                <p className="text-gray-600">{portfolio.clientName}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Date:</p>
                <p className="text-gray-600">
                  Started: {portfolio.startDate} <br /> Ended:{" "}
                  {portfolio.endDate}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Category:</p>
                <p className="text-gray-600">{portfolio.category}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  Description:
                </p>
                <p className="text-gray-600">{portfolio.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
