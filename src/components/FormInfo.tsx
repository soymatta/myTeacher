import React from "react";

const AuthInfoPanel: React.FC = () => {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-bold mb-6">Tu aprendizaje, tu camino</h1>

      <ul className="space-y-3 text-lg">
        <li>🎓 Tú eliges qué aprender y cómo: presencial o virtual.</li>
        <li>💰 Encuentra clases que se ajusten a tu presupuesto y horario.</li>
        <li>👉 Aprende de manera flexible y sin complicaciones.</li>
        <li>
          ❤️ ¡Únete a la comunidad de estudiantes y empieza hoy! Miles de
          profesores están listos para enseñarte.
        </li>
      </ul>
    </div>
  );
};

export default AuthInfoPanel;
