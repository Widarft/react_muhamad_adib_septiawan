import { create } from "zustand";
import { db, storage } from "../service/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const usePortfolioStore = create((set) => ({
  portfolios: [],
  loading: false,
  error: null,

  // Fetch all portfolios
  fetchPortfolios: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, "portfolios"));
      const portfolios = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ portfolios });
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      set({ error: "Failed to fetch portfolios." });
    } finally {
      set({ loading: false });
    }
  },

  // Add all portfolios
  addPortfolio: async (newPortfolio) => {
    set({ loading: true, error: null });
    console.log("Submitting new portfolio:", newPortfolio);

    try {
      let imageUrl = "";

      if (newPortfolio.imageFile) {
        const storageRef = ref(
          storage,
          `portfolios/${Date.now()}_${newPortfolio.imageFile.name}`
        );

        await uploadBytes(storageRef, newPortfolio.imageFile);

        imageUrl = await getDownloadURL(storageRef);
      }

      const { imageFile, ...portfolioData } = newPortfolio;

      const docRef = await addDoc(collection(db, "portfolios"), {
        ...portfolioData,
        image: imageUrl,
      });

      set((state) => ({
        portfolios: [
          ...state.portfolios,
          { id: docRef.id, ...portfolioData, image: imageUrl },
        ],
      }));
    } catch (error) {
      console.error("Error adding portfolio:", error);
      set({ error: "Failed to add portfolio." });
    } finally {
      set({ loading: false });
    }
  },

  // Update an existing portfolio
  updatePortfolio: async (updatedPortfolio) => {
    if (!updatedPortfolio?.id) {
      console.error("Portfolio ID is undefined or null.");
      return;
    }
    set({ loading: true, error: null });
    try {
      const portfolioRef = doc(db, "portfolios", updatedPortfolio.id);
      await updateDoc(portfolioRef, updatedPortfolio);
      set((state) => ({
        portfolios: state.portfolios.map((portfolio) =>
          portfolio.id === updatedPortfolio.id
            ? { ...portfolio, ...updatedPortfolio }
            : portfolio
        ),
      }));
    } catch (error) {
      console.error(
        `Error updating portfolio with ID ${updatedPortfolio.id}:`,
        error
      );
      set({
        error: `Failed to update portfolio with ID ${updatedPortfolio.id}.`,
      });
    } finally {
      set({ loading: false });
    }
  },

  // Delete a portfolio
  deletePortfolio: async (portfolioId) => {
    set({ loading: true, error: null });
    try {
      const portfolioRef = doc(db, "portfolios", portfolioId);
      await deleteDoc(portfolioRef);
      set((state) => ({
        portfolios: state.portfolios.filter(
          (portfolio) => portfolio.id !== portfolioId
        ),
      }));
    } catch (error) {
      console.error(`Error deleting portfolio with ID ${portfolioId}:`, error);
      set({ error: `Failed to delete portfolio with ID ${portfolioId}.` });
    } finally {
      set({ loading: false });
    }
  },
}));

export default usePortfolioStore;
