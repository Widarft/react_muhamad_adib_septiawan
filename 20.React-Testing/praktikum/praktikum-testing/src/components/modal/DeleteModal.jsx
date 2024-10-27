import React from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <p>
          Apakah anda ingin menghapus produk <strong>{productName}</strong>?
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={onConfirm}
          >
            Hapus
          </button>
          <button
            className="bg-bs-blue text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
