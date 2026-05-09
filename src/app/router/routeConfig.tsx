import OnBoardingPage from "@/pages/onboarding";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardPage from "@/pages/dashboard";
import { Layout } from "../Layout";
import RoomPage from "@/pages/room";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import NotFoundPage from "@/pages/not-found";

export const routeConfig = [
  {
    element: <Layout />,
    children: [
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
          { path: "/dashboard/room/:roomId", element: <RoomPage /> },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
