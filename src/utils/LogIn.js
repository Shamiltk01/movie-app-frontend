import React from "react";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import { Navigate } from "react-router-dom";

export const LogIn = () => {
  let auth = sessionStorage.getItem("authenticated");
  return (
    <div>
      {auth === "admin" ? (
        <Navigate to="/acceptuser" />
      ) : auth === "user" ? (
        <Navigate to="/userprofile" />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
