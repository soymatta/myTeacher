import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTutores, type tutorModel } from "../utils/tutores";
import { getUsers, type userModel } from "../utils/usuarios";
import DefaultPP from "../assets/img/default_pp.jpg";
import { getOpiniones, type opinionTutorModel } from "../utils/opinionesTutor";

export default function TeachersList() {
  const navigate = useNavigate();

  const [tutores, setTutores] = useState<tutorModel[]>([]);
  const [usuarios, setUsuarios] = useState<userModel[]>([]);
  const [opinionesDeTutor, setOpinionesDeTutor] = useState<opinionTutorModel[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const [dataTutores, dataUsuarios, dataOpiniones] = await Promise.all([
        getTutores(),
        getUsers(),
        getOpiniones(),
      ]);

      if (dataTutores) setTutores(dataTutores);
      if (dataUsuarios) setUsuarios(dataUsuarios);
      if (dataOpiniones) setOpinionesDeTutor(dataOpiniones);
    };

    fetchData();
  }, []);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h3 className="text-xl font-bold mb-6">
        Encuentra profesores particulares evaluados{" "}
        <span className="text-yellow-500">★★★★★</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutores.map((tutor) => {
          /* ============================
             Usuario del tutor
          ============================ */
          const usuario = usuarios.find((u) => u.id === tutor.id_usuario);

          /* ============================
             Opiniones del tutor actual
          ============================ */
          const opiniones = opinionesDeTutor.filter(
            (op) =>
              String(op.id_tutor).trim() === String(tutor.id_usuario).trim()
          );

          const cantidadOpiniones = opiniones.length;

          /* ============================
             Promedio de calificaciones
          ============================ */
          const ratingPromedio =
            cantidadOpiniones > 0
              ? (
                  opiniones.reduce((acc, o) => acc + Number(o.rating), 0) /
                  cantidadOpiniones
                ).toFixed(1)
              : "0";

          return (
            <button
              key={tutor.id_usuario}
              className="rounded-2xl overflow-hidden transition text-start"
              onClick={() => navigate(`/teacher/${tutor.id_usuario}`)}
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={usuario?.foto || DefaultPP}
                  alt={usuario?.nombre || "Foto del profesor"}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="font-bold text-white text-lg">
                    {usuario?.nombre}
                  </h4>

                  {/* Modalidad */}
                  <p className="text-sm text-gray-200">
                    {["presencial", "online"]
                      .filter((m) => tutor.modalidades?.includes(m))
                      .map((m) =>
                        m === "presencial" ? "Presencial" : "En línea"
                      )
                      .join(" • ") || "Sin modalidad registrada"}
                  </p>
                </div>
              </div>

              {/* Información */}
              <div className="p-4 bg-white space-y-3">
                {/* Asignaturas */}
                <p className="mt-1 text-sm">
                  <span className="font-semibold">
                    {tutor.asignaturas?.length
                      ? tutor.asignaturas.join(", ")
                      : "Sin asignatura registrada"}
                  </span>
                  {" - "}
                  {tutor.descripcion}
                </p>

                {/* Tarifas */}
                <div className="flex gap-3">
                  {tutor.tarifa_presencial != null && (
                    <div>
                      <span className="text-gray-500 text-m">Presencial: </span>
                      <span className="font-semibold text-sm">
                        $
                        {Number(tutor.tarifa_presencial).toLocaleString(
                          "en-US"
                        )}
                      </span>
                    </div>
                  )}

                  {tutor.tarifa_online != null && (
                    <div>
                      <span className="text-gray-500 text-m">En línea: </span>
                      <span className="font-semibold text-sm">
                        ${Number(tutor.tarifa_online).toLocaleString("en-US")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <i className="bx bxs-star bx-xs text-[#E7C817]"></i>

                  {/* Promedio */}
                  <span className="font-semibold">{ratingPromedio}</span>

                  {/* Cantidad de opiniones */}
                  <span className="text-gray-500 text-sm">
                    ({cantidadOpiniones} opiniones)
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
