import { Navigate } from "react-router-dom";
import { isTokenValid, hasRequiredRole } from "./auth";

const ProtectedRedirect = () => {
  const token = localStorage.getItem("accessToken");

  if (!isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  if (hasRequiredRole(token, ["creator"])) {
    return <Navigate to="/admin/profile" replace />;
  }

  if (hasRequiredRole(token, ["user"])) {
    return <Navigate to="/user/latest-news" replace />;
  }

  return <Navigate to="/unauthorized" replace />;
};

export default ProtectedRedirect;
