import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Code, Languages, Utensils, Crown, Car } from "lucide-react";

const CategoriesBar = () => {
  const scrollContainerRef = useRef(null);

  const categories = [
    { icon: <Code size={24} />, label: "Programación" },
    { icon: <Languages size={24} />, label: "Lenguas" },
    { icon: <Utensils size={24} />, label: "Cocina" },
    { icon: <Crown size={24} />, label: "Ajedrez" },
    { icon: <Car size={24} />, label: "Conducción" },
    // Añadí más categorías para probar el scroll
    { icon: <Code size={24} />, label: "Diseño" },
    { icon: <Languages size={24} />, label: "Música" },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 200; // Cantidad de pixeles a mover
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full px-4">
      {/* Contenedor Principal estilo "Píldora" */}
      <div className="flex items-center justify-between bg-blue-100 rounded-full px-2 py-2 md:px-4 md:py-3 w-full max-w-4xl mx-auto shadow overflow-hidden">
        
        {/* Flecha izquierda (Oculta en móvil, visible en MD en adelante) */}
        <button 
          onClick={() => scroll("left")}
          className="hidden md:flex bg-white rounded-full p-2 shadow hover:bg-gray-100 shrink-0 z-10"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>

        {/* Contenedor de Categorías (Scrollable) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-10 flex-1 overflow-x-auto scroll-smooth px-4 no-scrollbar items-center"
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-black hover:text-blue-600 cursor-pointer min-w-fit transition-colors duration-200 group"
            >
              <div className="p-2 rounded-full group-hover:bg-white/50 transition-colors">
                {cat.icon}
              </div>
              <span className="text-xs md:text-sm font-medium mt-1 whitespace-nowrap">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Flecha derecha (Oculta en móvil) */}
        <button 
          onClick={() => scroll("right")}
          className="hidden md:flex bg-white rounded-full p-2 shadow hover:bg-gray-100 shrink-0 z-10"
        >
          <ChevronRight size={20} className="text-black" />
        </button>
      </div>

      {/* Estilo para ocultar la barra de scroll nativa pero permitir el scroll */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default CategoriesBar;