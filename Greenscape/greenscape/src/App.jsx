import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./hook/PrivateRoute.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import AiProductPage from "./pages/AiProductPage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <MainLayout
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/createProduct"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CreateProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="/aiproductchat"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AiProductPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
