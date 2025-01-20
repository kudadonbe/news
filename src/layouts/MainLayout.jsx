import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[100vh] bg-gray-100">
        <Outlet />
      </main>

      <footer>
      <p className="bg-gray-100 text-gray-300 font-mono text-center p-1">&copy; 2025 Hussain Shareef/Kudadonbe. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
