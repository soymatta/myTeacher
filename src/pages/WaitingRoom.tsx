import React from "react";
import { 
  Video, 
  Clock, 
  Star, 
  Users, 
  Globe, 
  MapPin, 
  Calendar, 
  Wifi, 
  Mic, 
  BookOpen, 
  Sun,
  CheckCircle2
} from "lucide-react";

export default function WaitingRoom() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* Header Simple */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 mb-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-[#0A3D62]">myTeacher</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* ==========================================
            TARJETA PRINCIPAL: ESTADO DE LA SALA
           ========================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-[#0A3D62]" />
          </div>
          
          <h2 className="text-3xl font-bold mb-2">Sala de Espera</h2>
          <p className="text-gray-500 mb-6 text-lg">Tu clase comenzará pronto</p>
          
          <div className="inline-flex items-center gap-2 bg-[#0A3D62]/5 text-[#0A3D62] px-6 py-3 rounded-full font-semibold text-lg">
            <Clock className="w-6 h-6" />
            La clase ha comenzado
          </div>
        </div>

        {/* ==========================================
            GRID DE INFORMACIÓN (PROFESOR Y DETALLES)
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tarjeta: Profesor */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between h-full">
            <h3 className="font-bold text-xl mb-6">Profesor</h3>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" 
                  alt="Ana García" 
                  className="w-full h-full rounded-full object-cover border-2 border-gray-100"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Ana García</h4>
                <div className="flex items-center gap-1 text-yellow-500 font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  <span>5</span>
                  <span className="text-gray-400 font-normal text-sm">(3 Opiniones)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mt-auto">
              <Users className="w-4 h-4" />
              32 Alumnos
            </div>
          </div>

          {/* Tarjeta: Detalles de la Clase */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between h-full">
            <h3 className="font-bold text-xl mb-6">Detalles de la Clase</h3>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Asignatura</p>
                  <p className="text-gray-500 text-sm">Matemáticas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Modalidad</p>
                  <p className="text-gray-500 text-sm">En línea</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Duración</p>
                  <p className="text-gray-500 text-sm">1 hora</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            TARJETA DE HORARIO Y TARIFA
           ========================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-8">
            
            {/* Horario */}
            <div>
              <h3 className="font-bold text-base mb-2 text-gray-900">Horario Programado</h3>
              <div className="flex items-center gap-2 text-gray-600 text-lg">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>Sábado, 20 De Enero De 2024, 15:00</span>
              </div>
            </div>

            {/* Nivel e Idioma */}
            <div>
              <h3 className="font-bold text-base mb-3 text-gray-900">Nivel e Idioma</h3>
              <div className="flex gap-3">
                <span className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Intermedio</span>
                <span className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Español</span>
              </div>
            </div>

            {/* Tarifa */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-base mb-1 text-gray-900">Tarifa</h3>
              <p className="text-3xl font-bold text-[#0A3D62]">$50.000<span className="text-lg text-gray-400 font-normal">/h</span></p>
            </div>

          </div>
        </div>

        {/* ==========================================
            BOTÓN DE ACCIÓN (CENTRADO)
           ========================================== */}
        <div className="flex justify-center py-6">
          <button className="bg-[#0A3D62] hover:bg-[#083352] text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
            <Video className="w-6 h-6" />
            Unirse a la Clase
          </button>
        </div>

        {/* ==========================================
            TARJETA DE RECOMENDACIONES (TIPS)
           ========================================== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h3 className="font-bold text-lg mb-6 text-gray-900">Antes de unirte:</h3>
          
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <Wifi className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span>Asegúrate de tener una conexión a internet estable.</span>
            </li>
            <li className="flex items-start gap-3">
              <Mic className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span>Verifica que tu cámara y micrófono funcionen correctamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <span>Ten listo tu material de estudio y cuaderno.</span>
            </li>
            <li className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <span>Busca un lugar tranquilo y bien iluminado.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}