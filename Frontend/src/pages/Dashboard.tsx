// src/layouts/Dashboard.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/NavBar";

interface DashboardProps {
  role: "profesor" | "estudiante";
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navbar role={role} />
      <main className="flex-1 p-6 mt-28">
        {/* Aquí se renderiza la página seleccionada */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
