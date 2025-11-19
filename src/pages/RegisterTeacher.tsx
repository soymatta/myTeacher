import React, { useState } from "react";
import { 
  Camera, 
  X, 
  Upload, 
  CheckCircle2, 
  ChevronDown, 
  Loader2
} from "lucide-react";

export default function TeacherRegistration() {
  // --- ESTADOS DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    title: "",
    about: "",
    onlineRate: "",
    inPersonRate: "",
  });

  // Listas dinámicas para selección múltiple
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedModalities, setSelectedModalities] = useState([]);

  // Estado de carga visual
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // --- DATOS ESTÁTICOS (Para los dropdowns) ---
  const availableSubjects = ["Matemáticas", "Inglés", "Física", "Química", "Programación", "Historia", "Música", "Artes"];
  const availableLanguages = ["Español", "Inglés", "Francés", "Alemán", "Italiano", "Portugués"];
  const levels = ["Básico", "Intermedio", "Avanzado"];
  const modalities = ["En línea", "Presencial"];

  // --- HANDLERS (Manejadores de Eventos de UI) ---

  // 1. Inputs de texto simples (Título, Biografía, Tarifas)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Manejo de Asignaturas (Select + Chips)
  const handleAddSubject = (e) => {
    const val = e.target.value;
    if (val && !selectedSubjects.includes(val)) {
      setSelectedSubjects([...selectedSubjects, val]);
    }
    e.target.value = ""; // Resetear el select visualmente
  };

  const removeSubject = (sub) => {
    setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
  };

  // 3. Manejo de Idiomas (Select + Chips)
  const handleAddLanguage = (e) => {
    const val = e.target.value;
    if (val && !selectedLanguages.includes(val)) {
      setSelectedLanguages([...selectedLanguages, val]);
    }
    e.target.value = "";
  };

  const removeLanguage = (lang) => {
    setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
  };

  // 4. Botones Toggle (Niveles y Modalidades)
  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  // --- SIMULACIÓN DE ENVÍO AL BACKEND ---
  const handleSubmit = async () => {
    // 1. Validaciones Frontend
    if (!formData.title || !formData.about || selectedSubjects.length === 0) {
      alert("Por favor completa los campos obligatorios (Título, Acerca de, Asignaturas).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // 2. Construcción del Payload (Datos listos para la BD)
    // Este objeto tiene la estructura exacta para enviar a una API REST o guardar en NoSQL
    const dataToSubmit = {
      // Aquí el backend inyectaría el ID del usuario autenticado
      userId: "USER_ID_PLACEHOLDER", 
      
      personalInfo: {
        title: formData.title,
        about: formData.about,
        // En un escenario real, aquí iría la URL de la imagen subida a S3/Cloudinary
        photoUrl: null, 
      },
      skills: {
        subjects: selectedSubjects,
        languages: selectedLanguages,
      },
      details: {
        levels: selectedLevels,
        modalities: selectedModalities,
      },
      rates: {
        online: Number(formData.onlineRate) || 0,
        inPerson: Number(formData.inPersonRate) || 0,
      },
      metadata: {
        submittedAt: new Date().toISOString(),
        status: "pending_approval" // Ejemplo de campo de estado inicial
      }
    };

    // 3. Simulación de llamada a API (Dev Mode)
    try {
      console.log("🚀 [FRONTEND] Preparando envío de datos...");
      console.log("📦 [PAYLOAD] JSON generado:", JSON.stringify(dataToSubmit, null, 2));

      // Simulamos un retardo de red de 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulamos éxito
      setSubmitStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error("Error simulado:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- RENDERIZADO (JSX) ---

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Cabecera */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Registro del profesor</h1>
        <p className="mt-2 text-gray-600">Completa tu perfil para empezar a enseñar en nuestra plataforma</p>
      </div>

      {/* Mensaje de Éxito (Feedback visual) */}
      {submitStatus === 'success' && (
        <div className="max-w-4xl mx-auto mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800 animate-in fade-in slide-in-from-top-4 duration-500">
          <CheckCircle2 className="text-green-600" />
          <div>
            <p className="font-bold">¡Datos preparados correctamente!</p>
            <p className="text-sm">Revisa la consola del navegador (F12) para ver el objeto JSON generado.</p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        
      
        <div className="bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Información Personal</h2>

          {/* Foto de Perfil (UI Only) */}
          <div className="mb-8 flex flex-col items-center">
            <label className="block text-sm font-medium text-gray-700 mb-4 self-start">Foto de perfil (Opcional)</label>
            <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4 relative overflow-hidden group cursor-pointer hover:bg-gray-50 transition">
               <div className="text-gray-400 flex flex-col items-center">
                 <Camera size={32} />
               </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow-sm">
              <Upload size={16} />
              Subir Foto
            </button>
            <p className="mt-2 text-xs text-gray-400">Formatos admitidos: JPG, PNG. Tamaño máximo: 5MB</p>
          </div>

          {/* Título Profesional */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Título Profesional</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ej: Licenciada en educación"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          {/* Acerca del profesor */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Acerca del profesor</label>
            <textarea
              name="about"
              rows={5}
              value={formData.about}
              onChange={handleInputChange}
              placeholder="Cuéntanos sobre tu experiencia, metodología de enseñanza y qué te apasiona..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
            ></textarea>
            <p className="mt-2 text-xs text-gray-400">Describe tu experiencia y metodología de enseñanza</p>
          </div>
        </div>

        {/* =========================================================
            SECCIÓN 2: ASIGNATURAS (Estilo Chips)
           ========================================================= */}
        <div className="bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Asignaturas que Enseñas</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Agregar asignatura</label>
            <div className="relative">
              <select 
                onChange={handleAddSubject}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer text-gray-600"
              >
                <option value="">Seleccionar asignatura...</option>
                {availableSubjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Chips Container */}
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {selectedSubjects.map((sub) => (
              <span key={sub} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium animate-in fade-in zoom-in duration-200">
                {sub}
                <button onClick={() => removeSubject(sub)} className="p-0.5 hover:bg-gray-200 rounded-full text-gray-500 hover:text-red-500 transition">
                  <X size={14} />
                </button>
              </span>
            ))}
            {selectedSubjects.length === 0 && <span className="text-gray-400 text-sm italic">No has seleccionado asignaturas</span>}
          </div>
        </div>

        {/* =========================================================
            SECCIÓN 3: IDIOMAS
           ========================================================= */}
        <div className="bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Idiomas que hablas</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Agregar idioma</label>
            <div className="relative">
              <select 
                onChange={handleAddLanguage}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer text-gray-600"
              >
                <option value="">Selecciona un idioma...</option>
                {availableLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {selectedLanguages.map((lang) => (
              <span key={lang} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium animate-in fade-in zoom-in duration-200">
                {lang}
                <button onClick={() => removeLanguage(lang)} className="p-0.5 hover:bg-gray-200 rounded-full text-gray-500 hover:text-red-500 transition">
                  <X size={14} />
                </button>
              </span>
            ))}
             {selectedLanguages.length === 0 && <span className="text-gray-400 text-sm italic">No has seleccionado idiomas</span>}
          </div>
        </div>

        {/* =========================================================
            SECCIÓN 4: NIVELES Y MODALIDADES
           ========================================================= */}
        <div className="bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Niveles y modalidades</h2>
          
          {/* Niveles */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Niveles que enseñas</label>
            <div className="flex flex-wrap gap-3">
              {levels.map(level => {
                const isSelected = selectedLevels.includes(level);
                return (
                  <button
                    key={level}
                    onClick={() => toggleSelection(level, selectedLevels, setSelectedLevels)}
                    className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-200
                      ${isSelected 
                        ? "bg-[#0A3D62] border-[#0A3D62] text-white shadow-md" 
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}
                    `}
                  >
                    {level}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Modalidades */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Modalidades de clase</label>
            <div className="flex flex-wrap gap-3">
              {modalities.map(mode => {
                const isSelected = selectedModalities.includes(mode);
                return (
                   <button
                    key={mode}
                    onClick={() => toggleSelection(mode, selectedModalities, setSelectedModalities)}
                    className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-200 flex items-center gap-2
                      ${isSelected 
                        ? "bg-[#0A3D62] border-[#0A3D62] text-white shadow-md" 
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"}
                    `}
                  >
                    {mode}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            SECCIÓN 5: TARIFAS
           ========================================================= */}
        <div className="bg-white shadow-sm rounded-2xl p-6 md:p-8 border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tarifas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tarifa clases en línea (Por hora)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  name="onlineRate"
                  value={formData.onlineRate}
                  onChange={handleInputChange}
                  placeholder="50000"
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tarifa clases presenciales (Por hora)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                <input
                  type="number"
                  name="inPersonRate"
                  value={formData.inPersonRate}
                  onChange={handleInputChange}
                  placeholder="60000"
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTONES DE ACCIÓN
           ========================================================= */}
        <div className="flex justify-end gap-4 pt-4 pb-12">
          <button 
            className="px-8 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm"
            onClick={() => window.location.reload()} 
          >
            Cancelar
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-3 rounded-lg bg-[#0A3D62] text-white font-bold hover:bg-[#083352] transition shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting && <Loader2 className="animate-spin" size={20} />}
            {isSubmitting ? "Procesando..." : "Registrar profesor"}
          </button>
        </div>

      </div>
    </div>
  );
}