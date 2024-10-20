import React from "react";

const ProductTable = ({ products, handleDelete, handleEdit }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">No</th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Product Name
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Category
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Freshness
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Price
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">
              {product.productName}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {product.productCategory}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {product.productFreshness}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {"$ " + product.price}
            </td>
            <td>
              <div className="flex justify-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
