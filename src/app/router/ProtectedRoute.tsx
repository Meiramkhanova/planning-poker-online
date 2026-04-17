import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const isAuth = useSessionStore((s) => s.isAuthenticated);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
