import { teacher } from "../data/teacherData";

export default function AboutTeacher() {
  return (
    <section className="flex flex-col">
      <h1 className="text-3xl font-bold mb-5">{teacher.title}</h1>

      <h2 className="text-xl font-semibold mb-2">Lugar de las clases</h2>
      <div className="flex gap-5 mb-5">
        {teacher.mode.map((m, i) => (
          <span
            key={i}
            className="px-3 py-2 rounded-xl text-sm border border-[#D9D9D9]"
          >
            {m}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2">Acerca de {teacher.name}</h2>
      <p className="text-gray-600 leading-relaxed">
        {teacher.description || ""}
      </p>
    </section>
  );
}
