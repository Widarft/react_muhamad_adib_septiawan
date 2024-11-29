import { create } from "zustand";
import { db } from "../service/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  // Fetch all orders
  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched orders:", orders);
      set({ orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      set({ error: "Failed to fetch orders." });
    } finally {
      set({ loading: false });
    }
  },

  // Add a new order
  addOrder: async (newOrder) => {
    set({ loading: true, error: null });
    try {
      console.log("Attempting to add order:", newOrder);
      const docRef = await addDoc(collection(db, "orders"), newOrder);
      console.log("Order added with ID:", docRef.id);
      set((state) => ({
        orders: [...state.orders, { id: docRef.id, ...newOrder }],
      }));
    } catch (error) {
      console.error("Error adding order:", error);
      set({ error: "Failed to add order." });
    } finally {
      set({ loading: false });
    }
  },

  // Update order status
  updateOrderStatus: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const orderDoc = doc(db, "orders", id);
      await updateDoc(orderDoc, updatedData);
      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === id ? { ...order, ...updatedData } : order
        ),
      }));
      console.log(`Order ${id} status updated to done.`);
    } catch (error) {
      console.error("Error updating order status:", error);
      set({ error: "Failed to update order status." });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useOrderStore;
