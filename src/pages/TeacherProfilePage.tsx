import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTutor, type tutorModel } from "../utils/tutores";
import { getUser, type userModel } from "../utils/usuarios";
import DefaultPP from "../assets/img/default_pp.jpg";
// TABLA DE DATOS SIMULADOS DE TUTORES
import {
  getOpinionsByTutor,
  type opinionTutorModel,
} from "../utils/opinionesTutor";

export default function TeacherProfilePage() {
  const { id } = useParams();
  const [tutor, setTutor] = useState<tutorModel | null>(null);
  const [usuario, setUsuario] = useState<userModel | null>(null);
  const [opinionesDeTutor, setOpinionesDeTutor] = useState<
    opinionTutorModel[] | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID inválido.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        // Ejecuta las dos consultas en paralelo (más rápido)
        const [dataTutor, dataUser, dataOpinions] = await Promise.all([
          getTutor(id),
          getUser(id),
          getOpinionsByTutor(id),
        ]);

        if (!dataTutor) {
          setError("Tutor no encontrado.");
        }

        setTutor(dataTutor);
        setUsuario(dataUser);
        setOpinionesDeTutor(dataOpinions);
      } catch (err) {
        console.error("Error cargando perfil:", err);
        setError("Hubo un problema al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // UI de carga
  if (loading) return <p className="text-center mt-20">Cargando...</p>;

  // UI de error
  if (error) return <p className="text-center mt-20">{error}</p>;

  console.log("DEBUG: Opiniones del tutor:", opinionesDeTutor);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-20 py-10 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8 mt-20">
          <section className="flex flex-col">
            <h1 className="text-3xl font-bold mb-5">
              {tutor?.titulo_profesional}
            </h1>

            <h2 className="text-xl font-semibold mb-2">Lugar de las clases</h2>
            <div className="flex gap-5 mb-5">
              {tutor?.modalidades?.includes("presencial") && (
                <span className="px-3 py-2 rounded-xl text-sm border border-[#D9D9D9]">
                  Presencial
                </span>
              )}
              {tutor?.modalidades?.includes("online") && (
                <span className="px-3 py-2 rounded-xl text-sm border border-[#D9D9D9]">
                  En línea
                </span>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-2">
              Acerca de {usuario?.nombre}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {tutor?.descripcion}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Acerca de la clase</h2>
            <h3 className="text-l font-semibold mb-2 mt-3">Asignaturas</h3>
            {tutor?.asignaturas?.map((object) => (
              <span
                key={object}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm  mr-3"
              >
                {object}
              </span>
            ))}
            <h3 className="text-l font-semibold mb-2 mt-3">Idiomas</h3>
            {tutor?.idiomas?.map((object) => (
              <span
                key={object}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm mr-3"
              >
                {object}
              </span>
            ))}
            <h3 className="text-l font-semibold mb-2 mt-3">Niveles</h3>
            {tutor?.niveles?.map((object) => (
              <span
                key={object}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm  mr-3"
              >
                {object}
              </span>
            ))}
          </section>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Opiniones</h2>
            <i className="bx  bx-info-circle bx-sm"></i>
            {opinionesDeTutor?.length != null && (
              <span className="text-gray-500">
                ({opinionesDeTutor.length} opiniones)
              </span>
            )}
          </div>
          {opinionesDeTutor?.slice(0, 3).map((opinion) => (
            <ReviewCard
              key={opinion.id}
              UserID={opinion.id_estudiante ?? ""}
              Rating={opinion.rating}
              Comment={opinion.comentario}
            />
          ))}
        </section>

        <aside className="mt-20">
          <div className="bg-white border rounded-2xl shadow-sm p-6 justify-center items-center flex flex-col">
            <img
              src={usuario?.foto ?? DefaultPP}
              alt={usuario?.nombre}
              className="w-24 h-24 rounded-3xl mx-auto"
            />
            <h3 className="text-xl font-semibold text-center mt-4">
              {usuario?.nombre}
            </h3>
            <p className="text-sm text-center text-gray-500">
              <div className="flex gap-1 text-center justify-center items-center">
                <i className="bx  bxs-star bx-xs text-[#E7C817]"></i>
                {opinionesDeTutor?.length
                  ? (
                      opinionesDeTutor.reduce((a, b) => a + b.rating, 0) /
                      opinionesDeTutor.length
                    ).toFixed(2)
                  : "0"}{" "}
                ({opinionesDeTutor?.length} Opiniones)
              </div>
            </p>

            <div className="w-full mt-4">
              <h2 className="text-x font-semibold mb-2 text-center">Precios</h2>

              <div className="flex justify-center gap-4">
                {tutor?.tarifa_presencial != null && (
                  <div className="flex-1 max-w-xs border p-4 rounded-xl text-center bg-white shadow-sm">
                    <p className="text-gray-500 text-sm">Presencial</p>
                    <p className="font-semibold">
                      ${Number(tutor.tarifa_presencial).toLocaleString("en-US")}
                    </p>
                  </div>
                )}

                {tutor?.tarifa_online != null && (
                  <div className="flex-1 max-w-xs border p-4 rounded-xl text-center bg-white shadow-sm">
                    <p className="text-gray-500 text-sm">En línea</p>
                    <p className="font-semibold">
                      ${Number(tutor.tarifa_online).toLocaleString("en-US")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button className=" flex gap-2 mt-4 px-10  bg-[#0A3D62] text-white rounded-2xl py-2 hover:bg-[#072d48] transition items-center">
              <i className="bx  bx-message-reply text-white"></i>
              Contactar
            </button>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
