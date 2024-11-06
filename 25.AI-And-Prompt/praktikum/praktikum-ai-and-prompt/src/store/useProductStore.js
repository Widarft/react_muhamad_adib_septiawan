import { create } from "zustand";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(apiURL);
      set({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ error: "Failed to fetch products." });
    } finally {
      set({ loading: false });
    }
  },

  addProduct: async (newProduct) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(apiURL, newProduct);
      set((state) => ({
        products: [...state.products, response.data],
      }));
    } catch (error) {
      console.error("Error adding product:", error);
      set({ error: "Failed to add product." });
    } finally {
      set({ loading: false });
    }
  },

  updateProduct: async (updatedProduct) => {
    if (!updatedProduct?.id) {
      console.error("Product ID is undefined or null.");
      return;
    }
    set({ loading: true, error: null });
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
      set({ error: `Failed to update product with ID ${updatedProduct.id}.` });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (productId) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${apiURL}/${productId}`);
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      }));
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      set({ error: `Failed to delete product with ID ${productId}.` });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
