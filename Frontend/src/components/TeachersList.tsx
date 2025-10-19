import { useNavigate } from "react-router-dom";

interface Teacher {
  id: number;
  name: string;
  location: string;
  mode: string;
  subject: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Isabel",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Inglés",
    description:
      "Licenciada en educación preescolar con 6 años de experiencia, experta en home school.",
    price: "$60/h",
    rating: 5,
    reviews: 10,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Christian",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Matemáticas",
    description:
      "Soy doctor en matemáticas, magíster en matemáticas y matemático.",
    price: "$60/h",
    rating: 5,
    reviews: 15,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Isabel",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Inglés",
    description:
      "Licenciada en educación preescolar con 6 años de experiencia, experta en home school.",
    price: "$60/h",
    rating: 5,
    reviews: 10,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Isabel",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Inglés",
    description:
      "Licenciada en educación preescolar con 6 años de experiencia, experta en home school.",
    price: "$60/h",
    rating: 5,
    reviews: 10,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Isabel",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Inglés",
    description:
      "Licenciada en educación preescolar con 6 años de experiencia, experta en home school.",
    price: "$60/h",
    rating: 5,
    reviews: 10,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Isabel",
    location: "Barranquilla",
    mode: "Presenciales",
    subject: "Inglés",
    description:
      "Licenciada en educación preescolar con 6 años de experiencia, experta en home school.",
    price: "$60/h",
    rating: 5,
    reviews: 10,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // agrega más aquí...
];

export default function TeachersList() {

  const navigate = useNavigate();

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h3 className="text-xl font-bold mb-6">
        Encuentra profesores particulares evaluados{" "}
        <span className="text-yellow-500">★★★★★</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <button
            key={t.id}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            onClick={() => navigate(`/teacher/${t.id}`)}
          >
            {/* Imagen con overlay para nombre y ubicación */}
            <div className="relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-sm text-gray-200">
                  {t.location} ({t.mode})
                </p>
              </div>
            </div>

            {/* Información debajo */}
            <div className="p-4 bg-white">
              <p className="mt-1 text-sm">
                <span className="font-semibold">{t.subject} - </span>
                {t.description}
              </p>
              <p className="mt-2 font-semibold">{t.price}</p>
              <p className="text-yellow-500">
                ★ {t.rating}{" "}
                <span className="text-gray-500 text-sm">
                  ({t.reviews} opiniones)
                </span>
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
