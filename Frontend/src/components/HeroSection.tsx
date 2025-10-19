import { Search, MapPin } from "lucide-react";
import CategoriesBar from "./CategoriaBar"; // 👈 importa el componente correcto
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
    const navigate = useNavigate();

    const handleSelectRole = (role: "profesor" | "estudiante") => {
      localStorage.setItem("role", role);
      navigate("/login");
    };

  return (
    <section className="w-full bg-gradient-to-b from-blue-100 to-blue-300 pb-12 rounded-b-3xl">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-[#0A3D62]">myTeacher</h1>
        <div className="flex gap-6 text-gray-800 font-medium">
          <button
            onClick={() => handleSelectRole("profesor")}
            className="hover:text-[#0A3D62] transition"
          >
            Dar clases particulares
          </button>

          <button
            onClick={() => handleSelectRole("estudiante")}
            className="hover:text-[#0A3D62] transition"
          >
            Conectarse
          </button>
        </div>
      </div>

      {/* Título */}
      <div className="text-center mt-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Encuentra tu <br /> profe ideal
        </h2>
      </div>

      {/* Buscador */}
      <div className="flex justify-center mt-6">
        <div className="flex bg-white rounded-full shadow-lg overflow-hidden w-[90%] md:w-[60%]">
          <div className="flex items-center gap-2 px-4 w-1/2 border-r">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder='Intenta "Inglés"'
              className="w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 px-4 w-1/2 border-r">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Dirección o ciudad"
              className="w-full focus:outline-none"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 font-semibold hover:bg-blue-600 transition">
            Buscar
          </button>
        </div>
      </div>

      {/* Categorías */}
      <div className="mt-10 px-6">
        <CategoriesBar /> {/* 👈 Aquí se integra el componente */}
      </div>
    </section>
  );
}
