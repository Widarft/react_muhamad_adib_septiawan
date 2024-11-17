import React, { useState } from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import OrderTable from "../tabel/OrderTabel";
import PortfolioForm from "../form/PortfolioForm";
import PortfolioTabel from "../tabel/PortfolioTabel";

const AdminLayout = ({ handleLogout }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActiveRoute = (path) =>
    location.pathname === path ? "bg-green-700 text-white" : "";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-64 bg-main-green text-second-cream min-h-screen p-4 fixed left-0 top-0 z-10`}
      >
        <div className="h-20 flex items-center justify-center">
          <img
            src="/assets/logo/logo.png"
            alt="logo"
            className="hidden lg:block"
          />
        </div>
        <hr className="border-second-cream/20 mt-5" />
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin"
                )}`}
              >
                Table Order
              </Link>
            </li>
            <li>
              <Link
                to="/admin/portfolioform"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin/portfolioform"
                )}`}
              >
                Form Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/admin/portfoliotable"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin/portfoliotable"
                )}`}
              >
                Table Portfolio
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full p-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Burger button untuk mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 absolute top-4 left-4 z-20"
      >
        <span className="block w-6 h-1 bg-black mb-2"></span>
        <span className="block w-6 h-1 bg-black mb-2"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </button>

      {/* Main content */}
      <div className="flex-1 ml-64 p-8">
        <header className="bg-main-green shadow-md p-4 mb-6 rounded-lg">
          <h1 className="text-xl font-semibold text-second-cream">
            Welcome, Admin
          </h1>
        </header>

        <main className="bg-white shadow-md rounded-lg p-6">
          <Routes>
            <Route path="/" element={<OrderTable />} />
            <Route path="/portfolioform" element={<PortfolioForm />} />
            <Route path="/portfoliotable" element={<PortfolioTabel />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
