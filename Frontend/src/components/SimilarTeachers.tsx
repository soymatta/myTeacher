import type { Teacher } from "../types/teacher";

const teachers: Teacher[] = [
  {
    id: 2,
    name: "Harold",
    subject: "Profesor de Física",
    rating: 5,
    reviews: 25,
    hourlyRate: 50000,
    students: 20,
    image: "/img/teacher1.jpg",
    city: "Bogotá",
    mode: ["Presencial"],
  },
  {
    id: 3,
    name: "Isabel",
    subject: "Profesora de Matemáticas",
    rating: 4.8,
    reviews: 30,
    hourlyRate: 45000,
    students: 28,
    image: "/img/teacher2.jpg",
    city: "Medellín",
    mode: ["En línea"],
  },
  {
    id: 4,
    name: "Ana",
    subject: "Profesora de Geometría",
    rating: 5,
    reviews: 40,
    hourlyRate: 50000,
    students: 32,
    image: "/img/teacher3.jpg",
    city: "Barranquilla",
    mode: ["En línea"],
  },
];

export default function SimilarTeachers() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">Profesores Similares</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="bg-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition"
          >
            <div className="h-32 bg-gray-300 rounded-xl mb-4"></div>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.subject}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
