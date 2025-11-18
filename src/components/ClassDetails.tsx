export default function ClassDetails() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Acerca de la clase</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          Todos los niveles
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          Español
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus
        libero ipsum, vel placerat quam maximus nec.
      </p>
    </section>
  );
}
