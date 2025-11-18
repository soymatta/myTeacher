import React from "react";

export default function Schedule() {
  const weekDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [schedule, setSchedule] = React.useState<Record<string, string[]>>({
    Lunes: [],
    Martes: [],
    Miércoles: [],
    Jueves: [],
    Viernes: [],
    Sábado: [],
    Domingo: [],
  });

  const handleToggle = (day: string, hour: number) => {
    setSchedule((prev) => {
      const hours = prev[day] || [];
      const hourStr = hour.toString();
      const updated = hours.includes(hourStr)
        ? hours.filter((h) => h !== hourStr)
        : [...hours, hourStr];

      return { ...prev, [day]: updated.sort((a, b) => Number(a) - Number(b)) };
    });
  };

  const handleSaveSchedule = () => {
    console.log("Horario guardado:", schedule);
  };

  return (
    <div className="min-h-screen text-gray-900 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Configurar Disponibilidad
        </h1>
        <p className="text-gray-600 mb-8">
          Gestiona las solicitudes de clases de tus estudiantes
        </p>

        {/* Tabla de horarios */}
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-gray-700 border-b border-gray-200">
                <th className="py-2 text-left">Hora</th>
                {weekDays.map((day) => (
                  <th key={day} className="py-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 14 }, (_, i) => 8 + i).map((hour) => (
                <tr key={hour} className="border-b border-gray-100">
                  <td className="font-medium text-gray-700 py-2">{hour}:00</td>
                  {weekDays.map((day) => {
                    const isChecked = schedule[day]?.includes(hour.toString());
                    return (
                      <td key={day} className="py-1">
                        <button
                          onClick={() => handleToggle(day, hour)}
                          className={`w-8 h-8 mx-auto rounded-md transition-colors duration-200
                            ${
                              isChecked
                                ? "bg-[#0A3D62] hover:bg-[#083352]"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        ></button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resumen dinámico */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Resumen de disponibilidad:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {weekDays.map((day) => (
              <div key={day}>
                <p className="font-semibold text-gray-700 mb-1">{day}:</p>
                {schedule[day].length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {schedule[day].map((hour) => (
                      <span
                        key={hour}
                        className="bg-[#334c5f] text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {hour}:00
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No disponible</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end mt-10 gap-3">
          <button className="px-6 py-2 rounded-lg bg-gray-200 text-gray-600 font-medium hover:bg-gray-300 transition">
            Cancelar
          </button>
          <button
            onClick={handleSaveSchedule}
            className="px-6 py-2 rounded-lg bg-[#0A3D62] text-white font-semibold hover:bg-[#083352] transition"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
