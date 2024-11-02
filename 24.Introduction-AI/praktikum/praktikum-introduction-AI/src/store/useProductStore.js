import { create } from "zustand";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const useProductStore = create((set) => ({
  products: [],

  fetchProducts: async () => {
    try {
      const response = await axios.get(apiURL);
      set({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  addProduct: async (newProduct) => {
    try {
      const response = await axios.post(apiURL, newProduct);
      set((state) => ({
        products: [...state.products, response.data],
      }));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },

  updateProduct: async (updatedProduct) => {
    if (!updatedProduct?.id) {
      console.error("Product ID is undefined or null.");
      return;
    }
    try {
      await axios.put(`${apiURL}/${updatedProduct.id}`, updatedProduct);
      set((state) => ({
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      }));
    } catch (error) {
      console.error(
        `Error updating product with ID ${updatedProduct.id}:`,
        error
      );
    }
  },

  deleteProduct: async (productId) => {
    try {
      await axios.delete(`${apiURL}/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  },
}));

export default useProductStore;
