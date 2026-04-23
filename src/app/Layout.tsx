import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export const Layout = () => {
  return (
    <div className="app-container bg-sky-50/20 h-screen flex flex-col">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Toaster position="bottom-right" />

      <Footer />
    </div>
  );
};
