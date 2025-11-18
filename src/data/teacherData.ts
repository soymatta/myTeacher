import type { Teacher, Review, PriceOption } from "../types/teacher";

export const teacher: Teacher = {
  id: 1,
  name: "Ana",
  subject: "Matemáticas, Álgebra, Geometría",
  rating: 5,
  reviews: 40,
  hourlyRate: 50000,
  students: 32,
  image:
    "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
  city: "Barranquilla",
  mode: ["Presencial", "En línea"],
  title:
    "Profesora de Matemáticas Certificada - Especialista en Álgebra y Geometría",
  description:
    "Profesora con  más de 10 años de experiencia en la enseñanza de matemáticas a estudiantes de todas las edades. Apasionada por ayudar a los alumnos a alcanzar su máximo potencial académico.",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Daniel",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus libero ipsum, vel placerat quam maximus nec.",
    rating: 5,
  },
  {
    id: 2,
    name: "María",
    comment:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5,
  },

];

export const priceOptions: PriceOption[] = [
  { label: "Tarifa/h", value: "$50,000" },
  { label: "En línea", value: "$50,000" },
  { label: "Presencial", value: "$60,000" },
];
