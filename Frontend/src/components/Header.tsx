export default function TeacherHeader() {
  return (
    <header className="bg-white py-4 px-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0A3D62]">myTeacher</h1>
      <div className="flex items-center gap-3">
        <button className="flex items-center bg-[#F7F7F7] p-3 rounded-full">
          <i className="bx  bx-message-circle-question-mark bx-xs"></i>
        </button>
        <button className="flex items-center bg-[#F7F7F7] p-3 rounded-full">
          <i className="bx  bx-heart bx-xs"></i>
        </button>
        <button className="flex gap-2 items-center bg-[#F7F7F7] px-2 py-1 rounded-full">
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
