import React from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import OrderTable from "../tabel/OrderTabel";
import CreateProduct from "../../pages/CreateProduct";

const AdminLayout = ({ handleLogout }) => {
  const location = useLocation();

  const isActiveRoute = (path) =>
    location.pathname === path ? "bg-green-700 text-white" : "";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-main-green text-second-cream min-h-screen p-4 fixed left-0 top-0">
        <img src="/assets/logo/logo.png" alt="logo" />
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
                Pesanan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/products"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin/products"
                )}`}
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/admin/customers"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin/customers"
                )}`}
              >
                Pelanggan
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className={`flex items-center p-3 rounded-lg ${isActiveRoute(
                  "/admin/settings"
                )}`}
              >
                Pengaturan
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
            <Route path="/products" element={<CreateProduct />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
