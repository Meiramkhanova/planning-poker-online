import OnBoardingPage from "@/pages/onboarding";
import { PublicRoute } from "./PublicRoute";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardPage from "@/pages/dashboard";

export const routeConfig = [
  {
    path: "/",
    element: <OnBoardingPage />,
  },
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <DashboardPage /> }],
  },
];
