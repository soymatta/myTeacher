export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm text-gray-600 text-center md:text-left">
        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-4">Sobre Nosotros</h4>
          <ul className="space-y-3">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">¿Quiénes somos?</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Menciones legales</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Política de privacidad</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Clases en línea</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-lg mb-4">Materias</h4>
          <ul className="space-y-3">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Artes</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Informática</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Idiomas</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Salud y Bienestar</li>
          </ul>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="font-bold text-gray-900 text-lg mb-4">Síguenos</h4>
          <ul className="space-y-3">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 mt-4 pt-8 pb-8 text-center">
        <p className="text-xs text-gray-400">
          © 2025 myTeacher, ¡aprende con los mejores!
        </p>
      </div>
    </footer>
  );
}