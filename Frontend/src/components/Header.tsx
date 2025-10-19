import { useNavigate } from "react-router-dom";

export default function TeacherHeader() {

  const navigate = useNavigate();

  return (
    <header className="bg-white py-4 px-10 flex justify-between items-center w-full fixed tabIndex-50 z-10">
      <div className="flex items-center gap-5">
        <button onClick={() => navigate("/")}><h1 className="text-2xl font-bold text-[#0A3D62]">myTeacher</h1></button>
        <div className="flex items-center rounded-2xl bg-[#F7F7F7] p-2 gap-3 border border-[#F7F7F7] hover:border-[#D9D9D9]">
          <input
            type="text"
            placeholder="Qué te interesa aprender?"
            className="bg-transparent outline-none px-2 w-64 text-sm"
          />
          <button className="rounded-2xl bg-[#0A3D62] text-white p-3 flex items-center">
            <i className="bx  bx-search"></i>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center bg-[#F7F7F7] p-3 rounded-full">
          <i className="bx  bx-message-circle-question-mark bx-xs"></i>
        </button>
        <button className="flex items-center bg-[#F7F7F7] p-3 rounded-full">
          <i className="bx  bx-heart bx-xs"></i>
        </button>
        <button
          className="flex gap-2 items-center bg-[#F7F7F7] px-2 py-1 rounded-full"
          onClick={() => navigate("/dashboard")}
        >
          <i className="bx  bx-menu bx-xs"></i>
          <div>
            <img
              src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Profile"
              className="h-7 rounded-full object-cover"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
