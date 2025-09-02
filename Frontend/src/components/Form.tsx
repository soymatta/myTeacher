import React from "react";

interface AuthFormProps {
  type: "register" | "login";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
      <h2 className="text-center font-bold text-lg mb-4">
        {type === "register" ? "Crea tu perfil" : "Inicia sesión"}
      </h2>

      <form className="flex flex-col gap-4">
        
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <button
          type="submit"
          className="bg-blue-900 text-white rounded-md py-2 font-medium hover:bg-blue-800"
        >
          {type === "register"
            ? "Inscríbete con tu e-mail"
            : "Ingresar con tu e-mail"}
        </button>

      
        <button
          type="button"
          className="bg-gray-100 rounded-md py-2 font-medium hover:bg-gray-200"
        >
          Inscripción con Google
        </button>

       
        <button
          type="button"
          className="bg-gray-100 rounded-md py-2 font-medium hover:bg-gray-200"
        >
          Regístrate con Apple
        </button>
      </form>

 
      <div className="text-center text-sm mt-4">
        {type === "register" ? (
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="font-bold">
              Conexión
            </a>
          </p>
        ) : (
          <p>
            ¿No tienes una cuenta?{" "}
            <a href="/register" className="font-bold">
              Regístrate
            </a>
          </p>
        )}
        <p className="text-gray-500 mt-2">
          Al registrarte, aceptas nuestras{" "}
          <a href="/terms" className="underline">
            Condiciones
          </a>.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
