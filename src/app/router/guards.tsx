import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/entities/session/AuthContext";

export const ProtectedRoute = () => {
  const { isAuth, isInitializing } = useAuth();

  if (isInitializing) return <div>Загрузка...</div>;

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const PublicRoute = () => {
  const { isAuth, isInitializing } = useAuth();

  if (isInitializing) return <div>Загрузка...</div>;

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
