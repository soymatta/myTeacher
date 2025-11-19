import React, { useState } from "react";
import AuthInfoPanel from "../components/FormInfo";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../utils/usuarios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState<userModel[] | null>(null);

  const navigate = useNavigate();

  // Validación del email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const emailIsValid = email.trim() !== "" && isValidEmail(email);
  const passwordIsValid = password.trim() !== "" && password.length >= 6;

  // Habilitar botón solo si ambos son válidos
  const isFormValid = emailIsValid && passwordIsValid;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailIsValid) {
      setMessage("Por favor ingresa un correo válido.");
      return;
    }

    if (!passwordIsValid) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);
    setMessage("🔐 Verificando la existencia de usuario...");

    getUsers()
      .then((data) => {
        setUsuarios(data);

        const foundUser = data?.find(
          (user) => user.email === email && user.password === password
        );

        if (foundUser) {
          setMessage("✅ ¡Inicio de sesión exitoso!");

          // Guardar datos en localStorage
          localStorage.setItem("userId", foundUser.id || "");
          localStorage.setItem("userRole", foundUser.rol);
          localStorage.setItem("userPic", foundUser.foto || "");

          // Redirección simulada
          setTimeout(() => {
            setLoading(false);
            navigate("/searching-teacher");
          }, 1500);
        } else {
          setMessage("❌ Usuario o contraseña incorrectos.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("⚠️ Error al conectar con el servidor.");
        setLoading(false);
      });
  };

  // Obtener usuario con ese email y password del backend

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
              Inicia sesión
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
                  }
                `}
              >
                {loading ? "Verificando..." : "Entrar con e-mail"}
              </button>
            </form>

            {/* Separador */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">o</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Texto inferior */}
            <p className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-blue-600 font-medium">
                Regístrate
              </a>
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">
              Al ingresar, aceptas nuestras{" "}
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

export default Login;
