// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  role: "profesor" | "estudiante";
}

const Navbar: React.FC<NavbarProps> = ({ role }) => {
  const professorLinks = [
    { to: "/dashboard/resumen", label: "Resumen" },
    { to: "/dashboard/solicitudes", label: "Solicitudes" },
    { to: "/dashboard/mensajes", label: "Mis Mensajes" },
    { to: "/dashboard/horario", label: "Horario" },
    { to: "/dashboard/mi-cuenta", label: "Mi Cuenta" },
  ];

  const studentLinks = [
    { to: "/dashboard/mi-perfil", label: "Mi Perfil" },
    { to: "/dashboard/mensajes", label: "Mis Mensajes" },
    { to: "/dashboard/mi-cuenta", label: "Mi Cuenta" },
  ];

  const links = role === "profesor" ? professorLinks : studentLinks;

  return (
    <nav className="bg-[#1f1f1f] text-white px-6 py-3 border-b border-gray-700">
      <ul className="flex gap-6">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `hover:text-white pb-1 border-b-2 transition-colors duration-200 ${
                  isActive
                    ? "text-white border-white"
                    : "text-gray-400 border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
