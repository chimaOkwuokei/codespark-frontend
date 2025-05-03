import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid, hasRequiredRole } from "./auth";

const AdminProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");

  if (!isTokenValid(token) || !hasRequiredRole(token, ["creator"])) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;
