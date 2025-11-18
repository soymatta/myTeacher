import { Search } from "lucide-react";
import HeroSection from "../components/HeroSection";
import TeachersList from "../components/TeachersList";
import Footer from "../components/Footer";

// Imágenes de ejemplo (Reemplázalas con tus imports locales)
const teacherImage = "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop"; 
const studentImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"; // Imagen de estudiantes/libros

export default function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[500px] md:min-h-[450px] flex items-center bg-gray-100">
          
          {/* Imagen de fondo (Estudiantes) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={studentImage} 
              alt="Estudiante aprendiendo" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Caja Naranja Suave a la IZQUIERDA */}
          {/* CAMBIO: md:ml-6 para moverlo más a la izquierda */}
          <div className="relative z-10 w-full md:w-[500px] md:ml-6 mx-4 mt-40 md:mt-0">
            <div className="bg-[#FFD6A5] p-8 md:p-10 rounded-[2rem] shadow-xl text-gray-900 transform transition hover:-translate-y-1 duration-300">
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                ¡Nunca pares de<br />
                aprender!
              </h2>
              
              <p className="text-base md:text-lg font-medium mb-8 leading-relaxed opacity-90">
                Matemáticas, inglés, guitarra o programación. Descubre nuestra selección completa de materias y encuentra tu pasión.
              </p>
              
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all active:scale-95 group">
                Ver todas las materias
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

            </div>
          </div>

        </div>
      </section>
      <TeachersList />

      {/* ==========================================
          SECCIÓN 1: CONVIÉRTETE EN SUPER PROFE (Tu diseño original)
          (Caja a la DERECHA)
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[500px] md:min-h-[450px] flex items-center">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 w-full h-full">
            <img src={teacherImage} alt="Profesor enseñando" className="w-full h-full object-cover object-center"/>
          </div>

          {/* Caja Azul a la DERECHA */}
          <div className="relative z-10 w-full md:w-[500px] md:ml-auto md:mr-12 mx-4 mt-40 md:mt-0">
            <div className="bg-[#AECFFF] p-8 md:p-10 rounded-[2rem] shadow-xl text-gray-900 transform transition hover:-translate-y-1 duration-300">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Tú también,<br />
                ¡conviértete en super profe!
              </h2>
              <p className="text-base md:text-lg font-medium mb-8 leading-relaxed opacity-90">
                Comparte tu conocimiento, vive de lo que te apasiona e independízate.
              </p>
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all active:scale-95">
                Saber más
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </section>

          <Footer />


    </main>
  );
}