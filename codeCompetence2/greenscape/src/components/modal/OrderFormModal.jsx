import React from "react";

const OrderFormModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-center mb-4">
          Confirm Submission
        </h3>
        <p className="text-gray-700 text-center mb-6">
          Are you sure you want to submit this order?
        </p>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFormModal;
