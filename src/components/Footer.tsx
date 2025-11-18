export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold mb-2">Sobre Nosotros</h4>
          <ul>
            <li>¿Quiénes somos?</li>
            <li>Menciones legales</li>
            <li>Política de privacidad</li>
            <li>Clases en línea</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Materias</h4>
          <ul>
            <li>Artes</li>
            <li>Informática</li>
            <li>Idiomas</li>
            <li>Salud y Bienestar</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Síguenos</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 pb-4">
        © 2025 myTeacher, ¡aprende con los mejores!
      </div>
    </footer>
  );
}
