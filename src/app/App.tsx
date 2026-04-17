import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useSessionStore } from "@/entities/session/model/store";
import { useEffect } from "react";

function App() {
  const checkAuth = useSessionStore((state) => state.checkAuth);
  const isLoading = useSessionStore((state) => state.isLoading);

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading of page</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
