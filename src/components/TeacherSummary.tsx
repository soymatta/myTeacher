import React from "react";
import { Bell, Clock, User } from "lucide-react";

const TeacherSummary: React.FC = () => {
  const activity = [
    {
      name: "María Gonzales",
      subject: "Matemáticas",
      date: "2025-08-31",
      status: "Pendiente",
      statusColor: "bg-orange-500",
    },
    {
      name: "María Gonzales",
      subject: "Matemáticas",
      date: "2025-08-31",
      status: "Aceptada",
      statusColor: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Título principal */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenido, Profesor
        </h1>
        <p className="text-gray-600 mt-2">
          Gestiona tus clases y solicitudes de estudiantes
        </p>
      </div>

      {/* Tarjetas superiores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">
              Solicitudes Pendientes
            </h2>
            <Bell className="text-gray-500" size={18} />
          </div>
          <p className="text-4xl font-bold text-blue-900">2</p>
          <span className="text-sm text-gray-500 mt-2">
            Requieren tu atención
          </span>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Clases hoy</h2>
            <Clock className="text-gray-500" size={18} />
          </div>
          <p className="text-4xl font-bold text-blue-900">2</p>
          <span className="text-sm text-gray-500 mt-2">
            Programadas para hoy
          </span>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">Total estudiantes</h2>
            <User className="text-gray-500" size={18} />
          </div>
          <p className="text-4xl font-bold text-blue-900">24</p>
          <span className="text-sm text-gray-500 mt-2">
            Estudiantes activos
          </span>
        </div>
      </div>

      {/* Actividad reciente */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Actividad Reciente
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Últimas solicitudes y clases programadas
        </p>

        <div className="flex flex-col gap-4">
          {activity.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Solicitud para {item.subject} - {item.date}
                  </p>
                </div>
              </div>
              <span
                className={`text-white text-sm px-3 py-1 rounded-full ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSummary;
