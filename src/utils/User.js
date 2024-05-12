import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const User = () => {
  let auth = sessionStorage.getItem("authenticated");
  return auth === "user" ? <Outlet /> : <Navigate to="/" />;
};
