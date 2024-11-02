import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../store/useProductStore";
const ProductTable = ({ handleDelete, handleEdit }) => {
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <table className="max-w-7xl mx-auto border-collapse border border-gray-200">
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
            Description
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Photo
          </th>
          <th className="bg-gray-400 border border-gray-300 px-4 py-2">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          const {
            id,
            productName,
            productCategory,
            productFreshness,
            price,
            description,
            productImage,
          } = product;
          return (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  className="hover:text-blue-600"
                  to={`/product/${id.toString()}`}
                >
                  {productName}
                </Link>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {productCategory}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {productFreshness}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {"$ " + price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {productImage ? (
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-24 h-24 object-cover"
                  />
                ) : (
                  <span>No image uploaded</span>
                )}
              </td>
              <td>
                <div className="flex justify-center space-x-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded"
                    onClick={() => handleEdit(id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
