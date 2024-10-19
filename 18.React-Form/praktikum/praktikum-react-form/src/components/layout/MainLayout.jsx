// src/layouts/Layout.js
import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import Header from "../Header";

const Layout = ({ isAuthenticated, handleLogout, children }) => {
  const location = useLocation();

  const hideHeaderPaths = ["/login", "/registration"];

  const isProductDetailPage = matchPath("/product/:id", location.pathname);

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && !isProductDetailPage && (
        <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      )}
      {children}
    </>
  );
};

export default Layout;
