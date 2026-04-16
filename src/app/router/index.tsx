import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./guards";
import LoginPage from "@/pages/login";
import DashboardPage from "@/pages/dashboard";
import RegisterPage from "@/pages/register";
import RoomPage from "@/pages/room";
import OnBoardingPage from "@/pages/onboarding";

export const router = createBrowserRouter([
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
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/room/:id", element: <RoomPage /> },
    ],
  },
]);
