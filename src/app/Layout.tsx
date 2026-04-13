import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="p-2.5 bg-slate-200">Header</header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
