import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const ProtectedRoutes = ({ children }) => {
  const { userName } = useAuth();
  if (!userName) {
    return <Navigate to="/quize" replace />
  }
  return children;
};

export default ProtectedRoutes;
