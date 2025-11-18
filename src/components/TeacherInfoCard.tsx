import { teacher } from "../data/teacherData";

export default function TeacherInfoCard() {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 justify-center items-center flex flex-col">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-24 h-24 rounded-3xl mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-4">{teacher.name}</h3>
      <p className="text-sm text-center text-gray-500">
        <div className="flex gap-1 text-center justify-center items-center">
          <i className="bx  bxs-star bx-xs text-[#E7C817]"></i>
          {teacher.rating} ({teacher.reviews} opiniIones)
        </div>
      </p>

      <div className="text-center mt-4">
        <p className="text-lg font-bold">
          ${teacher.hourlyRate.toLocaleString()} / h
        </p>
        <p className="text-sm text-gray-500">{teacher.students} alumnos</p>
      </div>

      <button className=" flex gap-2 mt-4 px-10  bg-[#0A3D62] text-white rounded-2xl py-2 hover:bg-[#072d48] transition items-center">
        <i className="bx  bx-message-reply text-white"></i>
        Contactar
      </button>
    </div>
  );
}
