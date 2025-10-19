import { type FC } from 'react'; 
import { 
  Smile, 
  Map, 
  Camera, 
  Lock, 
  Award, 
  Badge, 
  Frown,
  User,
  Image as ImageIcon
} from 'lucide-react';


const InformacionGeneral: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Información General <Smile size={20} className="text-gray-500" />
    </h2>
    <form className="space-y-4">
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Género</option>
        <option>Masculino</option>
        <option>Femenino</option>
        <option>Otro</option>
      </select>
      <input
        type="text"
        defaultValue="Elery Sebastián"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        defaultValue="08 / 26 / 2025"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        defaultValue="tast@gmail.com"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Número de celular"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Id de Google Meet"
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        className="w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300"
      >
        Validar
      </button>
    </form>
  </div>
);

const Titulo: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Título <Award size={20} className="text-gray-500" />
    </h2>
    <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
      <Award size={64} />
    </div>
    <button
      type="button"
      className="w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300"
    >
      Subir
    </button>
  </div>
);

const Direccion: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Dirección <Map size={20} className="text-gray-500" />
    </h2>
    <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
      <ImageIcon size={48} /> 
    </div>
  </div>
);

const DocumentoIdentidad: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Documento de Identidad <Badge size={20} className="text-gray-500" />
    </h2>
    <div className="w-40 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-4">
      <Badge size={56} />
    </div>
    <button
      type="button"
      className="w-full bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-300"
    >
      Subir
    </button>
  </div>
);

const EliminarCuenta: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Eliminar cuenta <Frown size={20} className="text-gray-500" />
    </h2>
    <p className="text-sm text-gray-600 mb-4">
      Todos tus datos (contactos, anuncios, correos, etc.) serán eliminados
      definitivamente y de manera irreversible.
    </p>
    <label className="flex items-center gap-2 text-sm text-gray-700 mb-4">
      <input type="radio" name="eliminar" className="form-radio text-red-500 focus:ring-red-500" />
      Eliminar cuenta
    </label>
    <button
      type="button"
      disabled
      className="w-full bg-gray-200 text-gray-400 font-semibold py-2 px-4 rounded-md cursor-not-allowed"
    >
      Eliminar Cuenta
    </button>
  </div>
);

const FotoPerfil: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Foto de perfil <Camera size={20} className="text-gray-500" />
    </h2>
    <div className="relative w-32 h-32 mb-4">
      <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
        <User size={64} />
      </div>
      <button
        type="button"
        className="absolute bottom-0 right-0 bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 ring-2 ring-white"
        aria-label="Cambiar foto de perfil"
      >
        <Camera size={20} />
      </button>
    </div>
  </div>
);

const CambiarContrasena: FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      Cambiar contraseña <Lock size={20} className="text-gray-500" />
    </h2>
    <button
      type="button"
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Cambiar Contraseña
    </button>
  </div>
);



const UserAccountPage: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="flex flex-col gap-6">
          <InformacionGeneral />
          <Titulo />
        </div>

        <div className="flex flex-col gap-6">
          <Direccion />
          <DocumentoIdentidad />
          <EliminarCuenta />
        </div>

        <div className="flex flex-col gap-6">
          <FotoPerfil />
          <CambiarContrasena />
        </div>

      </div>
    </div>
  );
};

export default UserAccountPage;