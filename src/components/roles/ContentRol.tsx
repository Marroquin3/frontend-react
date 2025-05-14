import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateRol from './CreacteRol';
import UpdateRol from './UpdateRol';
import { useRolStore } from '../../store/role.store';
import type { Role } from '../../types/roles.types';

function RoleList() {
    const { roles, OnGetRoleList, OnCreateRol, OnUpdateRol } = useRolStore();
     const [dataUpdateRol , setDtaUpdateRol] = useState<Role>()
    const [roleToDelete, setRoleToDelete] = useState<{ id: number; roleName: string } | null>(null);
    const [name, setName] = useState("");

    useEffect(() => {
        OnGetRoleList();
    }, []);

    const handleDelete = (id: number, roleName: string) => {
        setRoleToDelete({ id, roleName });
    };

    const confirmDelete = () => {
        if (roleToDelete) {
            // Aquí iría la lógica de eliminación real.
            toast.success(`Se ha eliminado el rol correctamente`, {
                position: 'top-right',
                autoClose: 3000,
            });
            setRoleToDelete(null);
        }
    };

    const cancelDelete = () => {
        setRoleToDelete(null);
    };

    
    const handleCreateRol = async () => {
        if (!name.trim()) {
            toast.error('Por favor ingresa un nombre para el rol.');
            return;
        }

        try {
            // Crear el rol
            await OnCreateRol({ name: name });
            toast.success('Rol creado correctamente');
            setName(''); // Limpiar el input
        } catch (error) {
            toast.error('Hubo un error al crear el rol');
        }
    };

    return (
        <div className="">
            <h1 className="text-2xl font-semibold flex justify-center items-center text-center mb-4">Lista de Roles</h1>

            <div className="flex justify-end mb-4">
                <CreateRol />
            </div>

            {/* Input para crear un nuevo rol */}
            <div className="flex justify-center mb-4">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del rol"
                    className="border px-4 py-2 rounded-md mr-2"
                />
                <button
                    onClick={handleCreateRol}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                >
                    GUARDAR REGISTRO
                </button>
            </div>

            <div className="flex justify-center m-8">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-2 px-4">Rol</th>
                            <th className="py-2 px-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {roles.map((rol) => (
                            <tr key={rol.id}>
                                <td className="py-2 px-4 text-center">{rol.name}</td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        onClick={() => setDtaUpdateRol(rol)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded-full mr-2"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(rol.id, rol.name)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Toast container */}
            <ToastContainer />

            {/* Modal de confirmación de eliminación */}
            {roleToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="mb-4">¿Estás seguro de que deseas eliminar el rol <strong>"{roleToDelete.roleName}"</strong>?</p>
                        <div className="flex justify-center">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Sí, eliminar
                            </button>
                            <button
                                onClick={cancelDelete}
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de edición */}
            {dataUpdateRol && (
                <UpdateRol
                    isOpen={dataUpdateRol ? true : false}
                    onClose={() => setDtaUpdateRol(undefined)}
                    onUpdate={dataUpdateRol}
                />
            )}
        </div>
    );
}

export default RoleList;
