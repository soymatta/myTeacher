import { type FC } from 'react';
import { User, Camera, CheckCircle } from 'lucide-react';

const UserProfileCard: FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center w-full">
    
    <div className="relative w-32 h-32 mb-4">
      <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
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
    
    <h1 className="text-2xl font-bold text-gray-900 mt-2">
      Ellery Sebastián
    </h1>

    <div className="w-full border-b border-gray-200 my-4"></div>

    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span>Perfil verificado</span>
      <CheckCircle size={16} className="text-gray-600" />
    </div>
  </div>
);


const UserScheduleCard: FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md w-full">
    
    <h2 className="text-lg font-semibold text-gray-800">
      Tu horario
    </h2>

    <div className="w-full border-b border-gray-200 my-4"></div>
    
    <div className="min-h-[200px]">
      <p className="text-sm text-gray-400">El contenido de tu horario se mostrará aquí...</p>
    </div>
  </div>
);


const UserProfileView: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1">
          <UserProfileCard />
        </div>

        <div className="lg:col-span-2">
          <UserScheduleCard />
        </div>

      </div>
    </div>
  );
};

export default UserProfileView;