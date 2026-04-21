import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const isAuthenticated = useSessionStore((s) => s.isAuthenticated);

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
