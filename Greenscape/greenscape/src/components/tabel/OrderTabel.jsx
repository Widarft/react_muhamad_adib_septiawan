import React, { useEffect } from "react";
import useOrderStore from "../../store/useOrderStore";

const OrderTable = () => {
  const { orders, fetchOrders } = useOrderStore();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="overflow-x-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-main-green">
        Order List
      </h2>
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
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.fullName}</td>
              <td className="border px-4 py-2">{order.phone}</td>
              <td className="border px-4 py-2">{order.email}</td>
              <td className="border px-4 py-2">{order.address}</td>
              <td className="border px-4 py-2">{order.serviceType}</td>
              <td className="border px-4 py-2">{order.packageType}</td>
              <td className="border px-4 py-2">
                {new Date(order.startDate * 1000).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">{order.budgetRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
