import React from "react";

// Iconos simples (puedes usar lucide-react o font-awesome si prefieres)
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

export default function StudentBooking() {
  const weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // --------------------------------------------------------
  // MOCK DATA: Esto vendría de tu base de datos (lo que configuró el profesor)
  // Simula que el profesor Ana está disponible Lunes a las 8 y 9, y Martes a las 10.
  // --------------------------------------------------------
  const teacherAvailability: Record<string, string[]> = {
    Lunes: ["8", "9", "14", "15"],
    Martes: ["10", "11", "16"],
    Miércoles: ["8", "9", "10"],
    Jueves: ["14", "15"],
    Viernes: [],
    Sábado: ["9", "10"],
    Domingo: [],
  };

  // Estado para lo que el Estudiante selecciona
  // Guardamos strings tipo "Lunes-8" para facilitar la identificación
  const [selectedSlots, setSelectedSlots] = React.useState<string[]>([]);

  const handleSlotClick = (day: string, hour: number) => {
    // 1. Verificamos si el profesor realmente está disponible a esa hora
    // (Aunque la UI lo oculte, es bueno validar)
    const isTeacherAvailable = teacherAvailability[day]?.includes(hour.toString());
    if (!isTeacherAvailable) return;

    const slotId = `${day}-${hour}`;

    setSelectedSlots((prev) => {
      if (prev.includes(slotId)) {
        return prev.filter((id) => id !== slotId); // Deseleccionar
      } else {
        return [...prev, slotId]; // Seleccionar
      }
    });
  };

  const removeSlot = (slotId: string) => {
    setSelectedSlots((prev) => prev.filter((id) => id !== slotId));
  };

  const handleSubmit = () => {
    console.log("Solicitud enviada con los horarios:", selectedSlots);
    // Aquí iría tu lógica para guardar la reserva en DB
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
        
        {/* --- Header: Título --- */}
        <h1 className="text-3xl font-bold text-[#0A3D62] mb-6">Reservar Clases</h1>

        {/* --- Perfil del Profesor --- */}
        <div className="bg-gray-50 p-4 rounded-xl mb-8 border border-gray-100 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-200 overflow-hidden border-2 border-white shadow-sm">
            <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" 
               alt="Profesor" 
               className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-lg">Profesora Ana Gonzales</h2>
            <p className="text-sm text-gray-500 font-medium">Matemáticas • Física • Química</p>
          </div>
        </div>

        {/* --- Instrucciones --- */}
        <div className="mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-4 h-4 text-[#0A3D62]">📅</span> Horarios Disponibles
            </h3>
            <p className="text-sm text-gray-500 mt-1">Haz clic en los bloques azules claros para seleccionarlos.</p>
        </div>

        {/* --- Tabla de Horarios --- */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-center border-collapse min-w-[600px]">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-100">
                <th className="py-4 font-medium w-16">Hora</th>
                {weekDays.map((day) => (
                  <th key={day} className="py-4 font-medium">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 14 }, (_, i) => 8 + i).map((hour) => (
                <tr key={hour} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="text-xs font-semibold text-gray-400 py-3">{hour}:00</td>
                  {weekDays.map((day) => {
                    // Lógica de visualización
                    const isAvailable = teacherAvailability[day]?.includes(hour.toString());
                    const slotId = `${day}-${hour}`;
                    const isSelected = selectedSlots.includes(slotId);

                    return (
                      <td key={day} className="p-1 h-10">
                        {isAvailable ? (
                          <button
                            onClick={() => handleSlotClick(day, hour)}
                            className={`w-full h-full rounded-md text-xs font-medium transition-all duration-200 flex items-center justify-center border
                              ${isSelected 
                                ? "bg-[#0A3D62] text-white border-[#0A3D62] shadow-md transform scale-105" 
                                : "bg-blue-50 text-[#0A3D62] border-blue-100 hover:bg-blue-100 hover:border-blue-200"
                              }
                            `}
                          >
                            {isSelected ? "Seleccionado" : "Disponible"}
                          </button>
                        ) : (
                          // Espacio vacío si el profesor no trabaja
                          <div className="w-full h-full"></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Footer: Selección y Botón --- */}
        <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span>📖</span> Horario Seleccionado
            </h3>

            {/* Chips de selección */}
            <div className="flex flex-wrap gap-2 mb-8 min-h-[40px]">
                {selectedSlots.length > 0 ? (
                    selectedSlots.map(slot => {
                        const [d, h] = slot.split("-");
                        return (
                            <div key={slot} className="bg-blue-100 text-[#0A3D62] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm border border-blue-200">
                                {d} - {h}:00
                                <button onClick={() => removeSlot(slot)} className="hover:text-red-500 transition-colors">
                                    <XIcon />
                                </button>
                            </div>
                        )
                    })
                ) : (
                    <p className="text-gray-400 text-sm italic self-center">No has seleccionado ningún horario todavía.</p>
                )}
            </div>

            {/* Botón Enviar */}
            <button
                onClick={handleSubmit}
                disabled={selectedSlots.length === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
                    ${selectedSlots.length > 0 
                        ? "bg-[#0A3D62] text-white hover:bg-[#083352] shadow-lg hover:shadow-xl translate-y-0" 
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }
                `}
            >
                <SendIcon />
                Enviar Solicitud
            </button>
        </div>

      </div>
    </div>
  );
}