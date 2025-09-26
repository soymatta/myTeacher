import React, { useState } from "react";
import AuthInfoPanel from "../components/FormInfo";

const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Por favor ingresa un correo válido.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setMessage("Usuario listo para enviar al backend.");
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-6 md:px-12">
      <div className="flex w-full max-w-6xl bg-transparent gap-12">
        {/* Panel izquierdo */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-12">
          <div className="max-w-md">
            
            <AuthInfoPanel />
          </div>
        </div>

        {/* Formulario derecho */}
        <div className="flex w-full md:w-1/2 items-center justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
            <h2 className="text-center font-bold text-2xl mb-6">
              Crea tu perfil
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {message && (
                <p className="text-sm text-center text-gray-600">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-md font-semibold ${
                  loading
                    ? "bg-gray-400 text-white"
                    : "bg-blue-900 text-white hover:bg-blue-800"
                }`}
              >
                {loading ? "Creando usuario..." : "Inscríbete con tu e-mail"}
              </button>
            </form>

            {/* Separador */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">o</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Botones extra */}
            <button className="w-full py-3 mb-3 rounded-md font-medium bg-gray-100 hover:bg-gray-200">
              Inscripción con Google
            </button>
            <button className="w-full py-3 rounded-md font-medium bg-gray-100 hover:bg-gray-200">
              Regístrate con Apple
            </button>

            {/* Texto inferior */}
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
