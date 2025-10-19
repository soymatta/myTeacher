import React from "react";

const Solicitudes: React.FC = () => {
  const solicitudesActivas = [
    {
      id: 1,
      estudiante: "Juan Pérez",
      materia: "Matemáticas",
      fecha: "2025-10-19",
    },
    { id: 2, estudiante: "Ana Gómez", materia: "Física", fecha: "2025-10-18" },
  ];

  const solicitudesPendientes = [
    {
      id: 3,
      estudiante: "Carlos López",
      materia: "Química",
      fecha: "2025-10-20",
    },
    {
      id: 4,
      estudiante: "María Torres",
      materia: "Biología",
      fecha: "2025-10-21",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 ">
      <h1 className="text-3xl font-bold mb-8 ">Gestión de Solicitudes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Solicitudes Activas */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Solicitudes Activas
          </h2>
          {solicitudesActivas.length > 0 ? (
            <ul className="space-y-3">
              {solicitudesActivas.map((s) => (
                <li
                  key={s.id}
                  className="bg-gray-50 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{s.estudiante}</p>
                    <p className="text-sm text-gray-600">{s.materia}</p>
                    <p className="text-xs text-gray-500">Fecha: {s.fecha}</p>
                  </div>
                  <button className="px-3 py-1 bg-[#0A3D62] text-white rounded-lg text-sm font-semibold">
                    Ver
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No hay solicitudes activas.</p>
          )}
        </div>

        {/* Solicitudes Pendientes */}
        <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
            Pendientes por Aceptar
          </h2>
          {solicitudesPendientes.length > 0 ? (
            <ul className="space-y-3">
              {solicitudesPendientes.map((s) => (
                <li
                  key={s.id}
                  className="bg-gray-50 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{s.estudiante}</p>
                    <p className="text-sm text-gray-600">{s.materia}</p>
                    <p className="text-xs text-gray-500">Fecha: {s.fecha}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold">
                      Aceptar
                    </button>
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold">
                      Rechazar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No hay solicitudes pendientes.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solicitudes;
