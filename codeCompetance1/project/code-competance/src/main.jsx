import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WelcomePage />
  </StrictMode>
);
