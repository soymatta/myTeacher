// src/context/UserContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from "react";

type UserRole = "profesor" | "estudiante";

interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // 🔧 Por defecto asumimos que es profesor (puedes cambiar a "estudiante")
  const [role, setRole] = useState<UserRole>("profesor");

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};
