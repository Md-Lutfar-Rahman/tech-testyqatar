import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Header/>

      {/* Page content will go here */}
      <main className="p-4">
        <Outlet />
      </main>

      {/* Footer Here */}
      <footer className="p-4 text-center text-sm text-gray-500">© 2025 Tech & Taste Qatar</footer>
    </div>
  );
};

export default Layout;
