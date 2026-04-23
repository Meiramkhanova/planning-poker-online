import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSessionStore } from "@/entities/session/model/store";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeConfig } from "./router/routeConfig";
import LoadingElement from "@/shared/ui/LoadingElement";

const queryClient = new QueryClient();
const router = createBrowserRouter(routeConfig);

function App() {
  const checkAuth = useSessionStore((state) => state.checkAuth);
  const isLoading = useSessionStore((state) => state.isLoading);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <LoadingElement className="h-screen" />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;
