import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/shared/ui/sonner";
import { TooltipProvider } from "@/shared/ui/tooltip";

export const Layout = () => {
  return (
    <TooltipProvider>
      <div className="app-container bg-sky-50/20 h-screen flex flex-col">
        <Header />

        <main className="grow">
          <Outlet />
        </main>

        <Toaster position="bottom-right" />

        <Footer />
      </div>
    </TooltipProvider>
  );
};
