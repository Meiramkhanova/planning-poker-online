import OnBoardingPage from "@/pages/onboarding";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "@/pages/login";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardPage from "@/pages/dashboard";
import { RegisterPage } from "@/pages/register";

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
