import React, { useEffect, useState } from "react";
import usePortfolioStore from "../../store/usePortfolioStore";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditPortfolioModal from "../modal/EditPortfolioModal";
import DeletePortfolioModal from "../modal/DeletePortfolioModal";
import LoadingSpinner from "../ui/LoadingSpinner";

const PortfolioTable = () => {
  const { portfolios, fetchPortfolios, loading, deletePortfolio } =
    usePortfolioStore();
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [portfolioToDelete, setPortfolioToDelete] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Amount of data per page

  // Use for fetch data from storage
  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  // Use for edit data portfolio
  const handleEdit = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  // Use for delete data portfolio
  const handleDelete = (id) => {
    setPortfolioToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // Use for confirmation in delete data portfolio
  const confirmDelete = () => {
    if (portfolioToDelete) {
      deletePortfolio(portfolioToDelete);
      setPortfolioToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  // Use for cancel confirmation in delete data portfolio
  const cancelDelete = () => {
    setPortfolioToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Count total pages
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);

  // The data displayed is based on the current page
  const currentPortfolios = portfolios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function for page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10 text-center text-main-green">
        PORTFOLIO TABLE
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Location</th>
            <th className="py-2 px-4 border">Client Name</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPortfolios.map((portfolio) => (
            <tr key={portfolio.id}>
              <td className="py-2 px-4 border">{portfolio.title}</td>
              <td className="py-2 px-4 border">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border">{portfolio.location}</td>
              <td className="py-2 px-4 border">{portfolio.clientName}</td>
              <td className="py-2 px-4 border">
                {portfolio.startDate} to {portfolio.endDate}
              </td>
              <td className="py-2 px-4 border">{portfolio.category}</td>
              <td className="py-2 px-4 border">{portfolio.description}</td>
              <td className="py-2 px-4 border">
                <div className="flex justify-center space-x-2">
                  <button
                    className="text-yellow-500 hover:text-yellow-600"
                    onClick={() => handleEdit(portfolio)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(portfolio.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Information Pagination */}
      <div className="flex flex-col items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {Math.min(currentPage * itemsPerPage, portfolios.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {portfolios.length}
          </span>{" "}
          Entries
        </span>

        {/* Button Pagination */}
        <div className="inline-flex mt-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-600 rounded-s hover:bg-gray-800 disabled:bg-gray-300"
          >
            Prev
          </button>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-600 rounded-e hover:bg-gray-800 disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>

      {selectedPortfolio && (
        <EditPortfolioModal
          portfolio={selectedPortfolio}
          onClose={() => setSelectedPortfolio(null)}
        />
      )}
      {isDeleteModalOpen && (
        <DeletePortfolioModal
          isOpen={isDeleteModalOpen}
          onConfirm={confirmDelete}
          onClose={cancelDelete}
          projectTitle={
            portfolios.find((p) => p.id === portfolioToDelete)?.title
          }
        />
      )}
    </div>
  );
};

export default PortfolioTable;
