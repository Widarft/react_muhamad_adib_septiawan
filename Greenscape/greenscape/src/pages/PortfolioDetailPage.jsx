import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import usePortfolioStore from "../store/usePortfolioStore";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { portfolios, fetchPortfolios } = usePortfolioStore();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  useEffect(() => {
    const selectedPortfolio = portfolios.find((item) => item.id === id);
    if (selectedPortfolio) {
      setPortfolio(selectedPortfolio);
    }
  }, [id, portfolios]);

  if (!portfolio) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-blue">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold my-10 text-main-green">
          {portfolio.title}
        </h1>
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="mb-4 w-full h-96 object-cover"
        />
        <div className="mb-4">
          <p className="text-lg font-semibold">Location :</p>
          <p className="text-gray-700">{portfolio.location}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Client Name :</p>
          <p className="text-gray-700">{portfolio.clientName}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Date :</p>
          <p className="text-gray-700">
            Started Date : {portfolio.startDate} <br /> Ended Date :{" "}
            {portfolio.endDate}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Category :</p>
          <p className="text-gray-700">{portfolio.category}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Description :</p>
          <p className="text-gray-700">{portfolio.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
