// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  role: "profesor" | "estudiante";
}

const Navbar: React.FC<NavbarProps> = ({ role }) => {
  const professorLinks = [
    { to: "resumen", label: "Resumen" },
    { to: "solicitudes", label: "Solicitudes" },
    { to: "mensajes", label: "Mis Mensajes" },
    { to: "horario", label: "Horario" },
    { to: "mi-cuenta", label: "Mi Cuenta" },
  ];

  const studentLinks = [
    { to: "mi-perfil", label: "Mi Perfil" },
    { to: "mensajes", label: "Mis Mensajes" },
    { to: "mi-cuenta", label: "Mi Cuenta" },
  ];

  const links = role === "profesor" ? professorLinks : studentLinks;

  return (
    <nav className="bg-[#1f1f1f] text-white px-20 py-3 border-b border-gray-700 fixed z-10 w-full top-20">
      <ul className="flex gap-6">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
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
