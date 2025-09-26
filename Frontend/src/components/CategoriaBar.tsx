import { ChevronLeft, ChevronRight, Code, Languages, Utensils, Crown, Car } from "lucide-react";

const CategoriesBar = () => {
  const categories = [
    { icon: <Code size={24} />, label: "Programación" },
    { icon: <Languages size={24} />, label: "Lenguas" },
    { icon: <Utensils size={24} />, label: "Cocina" },
    { icon: <Crown size={24} />, label: "Ajedrez" },
    { icon: <Car size={24} />, label: "Conducción" },
  ];

  return (
    <div className="flex items-center justify-between bg-blue-100 rounded-full px-4 py-3 w-full max-w-4xl mx-auto shadow">
      {/* Flecha izquierda */}
      <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
        <ChevronLeft size={20} className="text-black" />
      </button>

      {/* Categorías */}
      <div className="flex gap-10 flex-1 justify-center">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-black hover:text-blue-600 cursor-pointer"
          >
            {cat.icon}
            <span className="text-sm font-medium mt-1">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
        <ChevronRight size={20} className="text-black" />
      </button>
    </div>
  );
};

export default CategoriesBar;
