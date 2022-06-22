import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContextProvider";

const RequireAuth = ({ children }) => {
  let { currentUser } = useAuth();

  if (!currentUser.isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;

  return <div></div>;
};

export default RequireAuth;
