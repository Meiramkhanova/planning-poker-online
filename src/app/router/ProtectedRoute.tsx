import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const isAuthenticated = useSessionStore((s) => s.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
