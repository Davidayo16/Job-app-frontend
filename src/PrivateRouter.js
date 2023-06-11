import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRouter({ children }) {
  const auth = window.localStorage.getItem("userInfoo");
  return auth ? children : <Navigate to="/landing" />;
}
export default PrivateRouter;
