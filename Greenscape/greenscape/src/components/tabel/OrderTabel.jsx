import React, { useState, useEffect } from "react";
import useOrderStore from "../../store/useOrderStore";
import LoadingSpinner from "../ui/LoadingSpinner";
import OrderTabelConfirmationModal from "../modal/OrderTabelConfirmationModal";

const OrderTable = () => {
  const { orders, fetchOrders, updateOrderStatus, loading } = useOrderStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <LoadingSpinner />;

  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  const openModal = (id) => {
    setSelectedOrderId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrderId(null);
  };

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
            {sortedOrders.map((order) => (
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
