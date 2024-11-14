import React from "react";
import { useLocation, matchPath, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  const location = useLocation();

  const hideHeaderPaths = ["/login", "/registration"];
  const hideFooterPaths = ["/login", "/registration"];

  const isProductDetailPage = matchPath("/product/:id", location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderPaths.includes(location.pathname) && !isProductDetailPage && (
        <Header />
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideFooterPaths.includes(location.pathname) && !isProductDetailPage && (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
