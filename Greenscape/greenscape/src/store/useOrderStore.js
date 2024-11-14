import { create } from "zustand";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_FORM_DATA_URL;

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(apiURL);
      set({ orders: response.data });
    } catch (error) {
      console.error("Error fetching orders:", error);
      set({ error: "Failed to fetch orders." });
    } finally {
      set({ loading: false });
    }
  },

  addOrder: async (newOrder) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(apiURL, newOrder);
      set((state) => ({
        orders: [...state.orders, response.data],
      }));
    } catch (error) {
      console.error("Error adding order:", error);
      set({ error: "Failed to add order." });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useOrderStore;
