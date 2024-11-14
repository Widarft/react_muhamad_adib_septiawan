import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./hook/PrivateRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import AiProductPage from "./pages/AiProductPage.jsx";
import OrderFormPage from "./pages/OrderFormPage.jsx";
import OrderTable from "./components/tabel/OrderTabel.jsx";
import RestrictedPage from "./pages/RestrictedPage.jsx";
import PortofolioCardSection from "./components/section/PortofolioCardSection.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
  };

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/login"
          element={
            <LoginPage
              setIsAuthenticated={setIsAuthenticated}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="restricted" element={<RestrictedPage />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated && isAdmin}>
              <AdminLayout handleLogout={handleLogout}>
                {" "}
                {/* Menambahkan handleLogout sebagai props */}
                <Routes>
                  <Route index element={<OrderTable />} />
                  <Route path="products" element={<CreateProduct />} />
                </Routes>
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Public Routes */}
        <Route
          element={
            <MainLayout
              isAuthenticated={isAuthenticated}
              handleLogout={handleLogout}
            />
          }
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/aiproductchat" element={<AiProductPage />} />
          <Route path="/inputorder" element={<OrderFormPage />} />
          <Route path="/portofolio" element={<PortofolioCardSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
