import React, { useEffect, useState } from "react";
import usePortfolioStore from "../store/usePortfolioStore";
import PortfolioCardSection from "../components/section/PortfolioCardSection";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const PortfolioPage = () => {
  const { portfolios, fetchPortfolios, loading, error } = usePortfolioStore();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Amount of data per page

  // Use for fetch data from storage
  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!Array.isArray(portfolios) || portfolios.length === 0) {
    return <p className="text-center">No projects found.</p>;
  }

  // Count total pages
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);

  // The data displayed is based on the current page
  const currentPortfolios = portfolios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function for page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-blue p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-10 text-center text-main-green">
          Our Projects
        </h1>

        {/* Grid Portfolios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPortfolios.map((portfolio) => (
            <PortfolioCardSection key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>

        {/* Pagination Controls */}
        <nav aria-label="Page navigation" className="mt-8 flex justify-center">
          <ul className="inline-flex items-center -space-x-px text-base">
            <li>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-auto h-10 text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <SlArrowLeft />
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => goToPage(index + 1)}
                  className={`flex items-center justify-center w-10 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === index + 1 ? "text-blue-600 bg-blue-50" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-auto h-10 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <SlArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PortfolioPage;
