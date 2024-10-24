import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateProduct from "./pages/CreateProduct.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateProduct />
  </StrictMode>
);
