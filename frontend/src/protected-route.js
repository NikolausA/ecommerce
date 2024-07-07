import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, admin, children }) => {
  if (user.roleId !== admin) {
    return <Navigate to="/" replace />;
  }

  return children;
};
