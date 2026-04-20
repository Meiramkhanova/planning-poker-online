import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="app-container bg-sky-50/20 h-screen flex flex-col">
      <Header />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
