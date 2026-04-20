import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const isAuthenticated = useSessionStore((s) => s.isAuthenticated);
  const isLoading = useSessionStore((s) => s.isLoading);

  if (isLoading) return <div>Loading</div>;

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};
