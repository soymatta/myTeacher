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

  const [schedule, setSchedule] = React.useState<{
    Monday: string[];
    Tuesday: string[];
    Wednesday: string[];
    Thursday: string[];
    Friday: string[];
    Saturday: string[];
    Sunday: string[];
  }>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const handleSaveSchedule = () => {
    // Extraer el id todos los checkboxes marcados
    const marckedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    // Iterar sobre ellos y obtener día y hora y guardarlos en un array
    const checkboxesData = [];
    for (let i = 0; i < marckedCheckboxes.length; i++) {
      checkboxesData.push(marckedCheckboxes[i].id);
    }

    //Agrupar por día
    // Crear arrays para cada día de la semana
    let Lunes: string[] = [];
    let Martes: string[] = [];
    let Miercoles: string[] = [];
    let Jueves: string[] = [];
    let Viernes: string[] = [];
    let Sabado: string[] = [];
    let Domingo: string[] = [];

    checkboxesData.forEach((checkboxId) => {
      const [day, hour] = checkboxId.split("-");
      if (day === "Lunes") {
        Lunes.push(hour);
      } else if (day === "Martes") {
        Martes.push(hour);
      } else if (day === "Miércoles") {
        Miercoles.push(hour);
      } else if (day === "Jueves") {
        Jueves.push(hour);
      } else if (day === "Viernes") {
        Viernes.push(hour);
      } else if (day === "Sábado") {
        Sabado.push(hour);
      } else if (day === "Domingo") {
        Domingo.push(hour);
      }
    });

    // Formatear dentro del objeto schedule
    setSchedule({
      Monday: Lunes,
      Tuesday: Martes,
      Wednesday: Miercoles,
      Thursday: Jueves,
      Friday: Viernes,
      Saturday: Sabado,
      Sunday: Domingo,
    });

    // Enviarlo al backend
    console.log("Schedule saved: ", schedule);
  };

  return (
    <>
      <h1 className="font-extrabold text-4xl">Selecciona tu horario</h1>
      <p>
        Marca las horas en las que estarás disponible. Esto ayudará a los
        estudiantes a encontrarte en esos momentos y también a limitar los
        horarios en los que podrán contactarte.
      </p>

      <table className="table-fixed border-collapse">
        <thead>
          <tr className="font-bold text-center">
            <td></td>
            {weekDays.map((day) => (
              <td key={day}>
                <p className="mb-1">{day}</p>
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 24 }, (_, hour) => (
            <tr key={hour}>
              <td className="font-bold">
                <p className="mr-3">{hour.toString().padStart(2, "0")}:00</p>
              </td>
              {weekDays.map((day) => (
                <td
                  key={day}
                  className="p-0 h-[30px] min-w-[90px] w-[14%] border border-gray-300"
                >
                  <label
                    htmlFor={`${day}-${hour}`}
                    className="flex items-center justify-center w-full h-full cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={`${day}-${hour}`}
                      className="hidden peer"
                    />
                    <span className="w-full h-full peer-checked:bg-green-200"></span>
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          handleSaveSchedule();
        }}
      >
        Guardar Cambios
      </button>
    </>
  );
}
