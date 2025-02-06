import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  console.log("Checking Private Route: User =", user); // ✅ Debugging Private Route

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;



