import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const isAuth = useSessionStore((s) => s.isAuthenticated);
  return isAuth ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
