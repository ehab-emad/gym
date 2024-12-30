import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectLinked = () => {
  const isLoggedIn =  localStorage.getItem("isLoggedIn");;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
