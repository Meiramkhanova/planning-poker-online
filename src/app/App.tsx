import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSessionStore } from "@/entities/session/model/store";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeConfig } from "./router/routeConfig";

const queryClient = new QueryClient();
const router = createBrowserRouter(routeConfig);

function App() {
  const checkAuth = useSessionStore((state) => state.checkAuth);
  const isLoading = useSessionStore((state) => state.isLoading);

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading of page</div>;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
