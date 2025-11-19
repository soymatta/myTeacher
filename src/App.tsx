import { Routes, Route, Navigate } from "react-router-dom";

// Páginas públicas
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import SearchingTeacher from "./pages/SearchingTeacher";

// Layout
import Dashboard from "./pages/Dashboard";

// Componentes del Dashboard
import TeacherSummary from "./components/TeacherSummary";
import StudentRequest from "./components/StudentRequest";
import Messages from "./components/Messages";
import UserAccountPage from "./components/UserAccount";
import UserProfileView from "./components/UserProfile";
import StudentBooking from "./pages/StudentBooking";

function App() {
  // Determina el rol del usuario
  const userRole =
    (localStorage.getItem("role") as "profesor" | "estudiante") || "profesor";

  return (
    <Routes>
      {/* 🏠 Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teacher/:id" element={<TeacherProfilePage />} />
      <Route path="/searching-teacher" element={<SearchingTeacher />} />

      {/* 🎓 Dashboard con layout y subrutas */}
      <Route path="/dashboard" element={<Dashboard role={userRole} />}>
        {userRole === "profesor" ? (
          <>
            <Route index element={<Navigate to="resumen" replace />} />
            <Route path="resumen" element={<TeacherSummary />} />
            <Route path="solicitudes" element={<StudentRequest />} />
            <Route path="mensajes" element={<Messages />} />
            <Route path="horario" element={<Schedule />} />
            <Route path="mi-cuenta" element={<UserAccountPage />} />
          </>
        ) : (
          <>
            <Route index element={<Navigate to="mi-perfil" replace />} />
            <Route path="mi-perfil" element={<UserProfileView />} />
            <Route path="mensajes" element={<Messages />} />
            <Route path="mi-cuenta" element={<UserAccountPage />} />
          </>
        )}
      </Route>

      {/* 🧭 Redirección por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
