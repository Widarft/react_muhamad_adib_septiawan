import React, { useState, useEffect } from "react";
import useOrderStore from "../../store/useOrderStore";
import LoadingSpinner from "../ui/LoadingSpinner";
import OrderTabelConfirmationModal from "../modal/OrderTabelConfirmationModal";

const OrderTable = () => {
  const { orders, fetchOrders, updateOrderStatus, loading } = useOrderStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Amount of data per page

  // Use for fetch data from storage
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <LoadingSpinner />;

  // Sorts data by latest start date
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  // Count total pages
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  // The data displayed is based on the current page
  const currentOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (id) => {
    setSelectedOrderId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrderId(null);
  };

  // Function to change the status to complete
  const confirmMarkAsDone = async () => {
    try {
      if (selectedOrderId) {
        await updateOrderStatus(selectedOrderId, { isDone: true });
        fetchOrders();
        alert("Order marked as done!");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status.");
    } finally {
      closeModal();
    }
  };

  // Function for page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-main-green">
        Order List
      </h2>
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Service Type</th>
              <th className="border px-4 py-2">Package</th>
              <th className="border px-4 py-2">Start Date</th>
              <th className="border px-4 py-2">Budget</th>
              <th className="border px-4 py-2">Done</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.fullName}</td>
                <td className="border px-4 py-2">{order.phone}</td>
                <td className="border px-4 py-2">{order.email}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">{order.serviceType}</td>
                <td className="border px-4 py-2">{order.packageType}</td>
                <td className="border px-4 py-2">{order.startDate}</td>
                <td className="border px-4 py-2">{order.budget}</td>
                <td className="border px-4 py-2 text-center">
                  {order.isDone ? (
                    <span className="px-4 py-2 bg-green-500 text-white rounded">
                      Done
                    </span>
                  ) : (
                    <button
                      onClick={() => openModal(order.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Mark as Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Information Pagination */}
      <div className="flex flex-col items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {Math.min(currentPage * itemsPerPage, sortedOrders.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-500">
            {sortedOrders.length}
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

      <OrderTabelConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmMarkAsDone}
        title="Mark as Done"
        message="Are you sure you want to mark this order as done?"
      />
    </div>
  );
};

export default OrderTable;
