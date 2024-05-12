import React from "react";
import { Outlet } from "react-router-dom/dist/umd/react-router-dom.development";
import AcceptUser from "../components/AcceptUser";
import UserProfile from "../components/UserProfile";

export const LogIn = () => {
  let auth = sessionStorage.getItem("authenticated");
  return auth === "admin" ? <AcceptUser /> : <Outlet />;
};
