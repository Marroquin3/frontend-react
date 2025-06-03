import React, {useState} from 'react';
import type { Role } from '../../types/roles.types';
import User from '../../pages/User';

const CreateUserModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<{ id: number; name: string; isActive: boolean } | null>(null);
        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const [roleId, setRoleId] = useState<number | "">(""); 
        const [role, setRole] = useState<Role | null>(null);  
        
        
        const openModal = () => {
            setIsModalOpen(true);
        };

        const closeModal = () =>{
            setIsModalOpen(false);
            setUserName('');
        }

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
            };

        const handleSubmit = async () => {
        if (userName.trim() !== '') {

            closeModal();
        }
    };

    return (
  <div>
    {isModalOpen && (
      <div>
        {/* Fondo oscuro */}
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

        {/* Contenedor del modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white p-6 rounded-lg shadow-lg relative w-96">

            {/* Botón cerrar (opcional) */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-black"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Crear Nuevo Usuario</h2>

            {/* Input: userName */}
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
            />

            {/* Input: password */}
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
            />

            {/* Input: roleId */}
            <input
              type="number"
              placeholder="ID del Rol"
              value={roleId}
              onChange={(e) => setRoleId(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
            />

            {/* Botón guardar */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Guardar Usuario
        </button>

          </div>
        </div>
      </div>
    )}
  </div>
);



        
}