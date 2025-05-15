import React from 'react';
import { useRolStore } from '../../store/role.store';
import { toast } from 'react-toastify';
import type { Role } from '../../types/roles.types';

interface DeleteRolProps {
  isOpen: boolean;
  onClose: () => void;
  roleToDelete: Role;
}

const DeleteRol: React.FC<DeleteRolProps> = ({ isOpen, onClose, roleToDelete }) => {
  const { OnDeleteRol, OnGetRoleList } = useRolStore();

  const handleDelete = async () => {
    try {
      await OnDeleteRol(roleToDelete.id);
      toast.success(`Rol "${roleToDelete.name}" eliminado correctamente`, {
        position: 'top-right',
        autoClose: 3000,
      });
      OnGetRoleList(); // Recargar lista de roles
      onClose(); // Cerrar modal
    } catch (error) {
      toast.error('Hubo un error al eliminar el rol');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <p className="mb-4 text-gray-800">
          ¿Estás seguro de que deseas eliminar el rol <strong>"{roleToDelete.name}"</strong>?
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRol;
