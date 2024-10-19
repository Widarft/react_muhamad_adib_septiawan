import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./hook/PrivateRoute.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {};

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
              <CreateProduct
                addProduct={addProduct}
                products={products}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProductDetail products={products} />
            </PrivateRoute>
          }
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
