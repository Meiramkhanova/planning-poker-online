import { useSessionStore } from "@/entities/session/model/store";
import { Navigate, Outlet, useSearchParams } from "react-router";

export const PublicRoute = () => {
  const isAuthenticated = useSessionStore((s) => s.isAuthenticated);
  const [searchParams] = useSearchParams();

  if (isAuthenticated) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/dashboard"} replace />;
  }

  return <Outlet />;
};
