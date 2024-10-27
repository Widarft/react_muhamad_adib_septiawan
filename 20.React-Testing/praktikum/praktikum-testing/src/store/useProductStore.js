import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      products: [],

      addProduct: (newProduct) => {
        if (!newProduct?.id) {
          console.error("New product does not have an ID.");
          return;
        }
        set((state) => ({
          products: [...state.products, newProduct],
        }));
      },

      updateProduct: (updatedProduct) =>
        set((state) => {
          if (!updatedProduct?.id) {
            console.error("Product ID is undefined or null.");
            return state;
          }

          const productExists = state.products.some(
            (product) => product.id === updatedProduct.id
          );

          if (!productExists) {
            console.error(`Product with ID ${updatedProduct.id} not found.`);
            return state;
          }

          const updatedProducts = state.products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          );

          return { products: updatedProducts };
        }),

      deleteProduct: (productId) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId
          ),
        })),
    }),
    {
      name: "product-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useProductStore;
