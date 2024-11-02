import React from "react";
import { useNavigationUtils } from "../hook/navigationUtils";

const Header = ({ isAuthenticated, handleLogout }) => {
  const { navigateTo } = useNavigationUtils();

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
      handleLogout();
    } else {
      navigateTo("/login");
    }
  };

  return (
    <header className="h-16 w-full p-4 bg-white items-center shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="font-roboto text-[24px]">Simple Header</h1>
        <ul id="nav-links" className="flex space-x-4 text-[16px]">
          {[
            { name: "Home", path: "/" },
            { name: "Create Product", path: "/createProduct" },
            { name: "AI Chat", path: "/aichat" },
            { name: "FAQs", path: "#" },
            { name: "About", path: "#" },
          ].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigateTo(item.path)}
                className="text-bs-blue hover:bg-bs-blue hover:text-white px-4 py-2 rounded-md focus:outline-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleAuthButtonClick}
          className="ml-4 px-4 py-2 bg-bs-blue text-white rounded-md hover:bg-blue-hover-btn focus:outline-none"
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
