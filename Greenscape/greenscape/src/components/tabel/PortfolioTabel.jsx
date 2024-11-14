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

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  const handleEdit = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  const handleDelete = (id) => {
    setPortfolioToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (portfolioToDelete) {
      deletePortfolio(portfolioToDelete);
      setPortfolioToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setPortfolioToDelete(null);
    setIsDeleteModalOpen(false);
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
          {portfolios.map((portfolio) => (
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
                {portfolio.startDate} - {portfolio.endDate}
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
