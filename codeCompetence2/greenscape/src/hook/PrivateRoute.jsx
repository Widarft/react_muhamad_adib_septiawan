import React from "react";
import { Navigate } from "react-router-dom";

// Use for private routes and will send the user to the login page if they don't have permission
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
