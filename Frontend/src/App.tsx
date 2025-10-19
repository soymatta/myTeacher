import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import SearchingTeacher from "./pages/SearchingTeacher";
import Dashboard from "./pages/Dashboard";
import TeacherSummary from "./components/TeacherSummary";
import StudentRequest from "./components/StudentRequest";
import Messages from "./components/Messages";
import MiCuenta from "./components/UserAccount";
import MiPerfil from "./components/UserProfile";

function App() {
  const userRole =
    (localStorage.getItem("role") as "profesor" | "estudiante") || "estudiante";

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teacher/:id" element={<TeacherProfilePage />} />
      <Route path="/SearchingTeacher" element={<SearchingTeacher />} />

      {/* Dashboard con layout */}
      <Route path="/dashboard" element={<Dashboard role={userRole} />}>
        {userRole === "profesor" ? (
          <>
            <Route path="summary" element={<TeacherSummary />} />
            <Route path="requests" element={<StudentRequest />} />
            <Route path="messages" element={<Messages />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="mi-cuenta" element={<MiCuenta />} />
          </>
        ) : (
          <>
            <Route path="mi-perfil" element={<MiPerfil />} />
            <Route path="messages" element={<Messages />} />
            <Route path="mi-cuenta" element={<MiCuenta />} />
          </>
        )}
      </Route>

      {/* Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
