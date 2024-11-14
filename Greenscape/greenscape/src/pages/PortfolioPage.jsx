import React, { useEffect } from "react";
import usePortfolioStore from "../store/usePortfolioStore";
import PortfolioCardSection from "../components/section/PortfolioCardSection";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const PortfolioPage = () => {
  const { portfolios, fetchPortfolios, loading, error } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  if (!Array.isArray(portfolios) || portfolios.length === 0) {
    return <p className="text-center">No projects found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-blue p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-10 text-center text-main-green">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <PortfolioCardSection key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
