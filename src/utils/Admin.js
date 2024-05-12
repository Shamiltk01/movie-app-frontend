import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Admin = () => {
  let auth = sessionStorage.getItem("authenticated");
  return auth === "admin" ? <Outlet /> : <Navigate to="/" />;
};
