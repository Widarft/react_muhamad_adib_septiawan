import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./hook/PrivateRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import AiChatbotPage from "./pages/AiChatbotPage.jsx";
import OrderFormPage from "./pages/OrderFormPage.jsx";
import OrderTable from "./components/tabel/OrderTabel.jsx";
import RestrictedPage from "./pages/RestrictedPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import PortfolioForm from "./components/form/PortfolioForm.jsx";
import PortfolioDetail from "./pages/PortfolioDetailPage.jsx";
import PortfolioTabel from "./components/tabel/PortfolioTabel.jsx";

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
                <Routes>
                  <Route index element={<OrderTable />} />
                  <Route path="portfolioform" element={<PortfolioForm />} />
                  <Route path="portfoliotable" element={<PortfolioTabel />} />\
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
          <Route path="/aichatbot" element={<AiChatbotPage />} />
          <Route path="/inputorder" element={<OrderFormPage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
