import React, { useState } from "react";
import AuthInfoPanel from "../components/FormInfo";

const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false); // 👈 NUEVO
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nombreIsValid = nombre.trim() !== "";
  const emailIsValid = email.trim() !== "" && isValidEmail(email);
  const passwordIsValid = password.trim() !== "" && password.length >= 6;

  const isFormValid = nombreIsValid && emailIsValid && passwordIsValid;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setMessage("Completa todos los campos correctamente.");
      return;
    }

    // Aquí se envía todo el registro (incluye isTeacher)
    const userData = {
      nombre,
      email,
      password,
      isTeacher, // 👈 LISTO PARA BACKEND
    };

    console.log("DATOS A ENVIAR:", userData);

    setMessage("Usuario listo para enviar al backend.");
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-6 md:px-12">
      <div className="flex w-full max-w-6xl bg-transparent gap-12">
        <div className="hidden md:flex w-1/2 items-center justify-center p-12">
          <div className="max-w-md">
            <AuthInfoPanel />
          </div>
        </div>

        <div className="flex w-full md:w-1/2 items-center justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
            <h2 className="text-center font-bold text-2xl mb-6">
              Crea tu perfil
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              {/* NOMBRE */}
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className={`w-full px-4 py-3 rounded-md border 
                  ${
                    nombre === ""
                      ? "border-gray-300"
                      : nombreIsValid
                      ? "border-green-500"
                      : "border-red-500"
                  } 
                  focus:outline-none focus:ring-2 ${
                    nombreIsValid
                      ? "focus:ring-green-500"
                      : "focus:ring-red-500"
                  }`}
              />

              {/* EMAIL */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className={`w-full px-4 py-3 rounded-md border 
                  ${
                    email === ""
                      ? "border-gray-300"
                      : emailIsValid
                      ? "border-green-500"
                      : "border-red-500"
                  }
                  focus:outline-none focus:ring-2 ${
                    emailIsValid ? "focus:ring-green-500" : "focus:ring-red-500"
                  }`}
              />

              {/* PASSWORD */}
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className={`w-full px-4 py-3 rounded-md border 
                  ${
                    password === ""
                      ? "border-gray-300"
                      : passwordIsValid
                      ? "border-green-500"
                      : "border-red-500"
                  }
                  focus:outline-none focus:ring-2 ${
                    passwordIsValid
                      ? "focus:ring-green-500"
                      : "focus:ring-red-500"
                  }`}
              />

              {/* CHECKBOX PROFESOR */}
              <label className="flex items-center gap-3 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTeacher}
                  onChange={() => setIsTeacher(!isTeacher)}
                  className="w-5 h-5 accent-blue-700"
                />
                <span className="text-gray-700 text-sm">¿Eres profesor?</span>
              </label>

              {message && (
                <p className="text-sm text-center text-gray-600">{message}</p>
              )}

              {/* BOTÓN */}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3 rounded-md font-semibold transition-all 
                  ${
                    isFormValid && !loading
                      ? "bg-blue-900 text-white hover:bg-blue-800 opacity-100"
                      : "bg-gray-400 text-white cursor-not-allowed opacity-50"
                  }`}
              >
                {loading ? "Creando usuario..." : "Inscríbete con tu e-mail"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">o</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Conexión
              </a>
            </p>

            <p className="text-center text-xs text-gray-500 mt-2">
              Al registrarte, aceptas nuestras{" "}
              <a href="/condiciones" className="underline">
                Condiciones
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
