import React, { useState, useEffect } from 'react';
import type { Role } from '../../types/roles.types';
import { useRolStore } from '../../store/role.store';
import { data } from 'react-router';


interface UpdateRolProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdate:Role
}

const UpdateRol: React.FC<UpdateRolProps> = ({ isOpen, onClose, onUpdate }) => {
  const [dataRol , setDataRol] = useState<Role>({
     id : 0 ,
     name : "",   
     isActive : true
  })
 const {  OnUpdateRol } = useRolStore();
  const handleUpdate =()=> {
     OnUpdateRol(onUpdate.id , {name : dataRol!.name})
  }
  useEffect(()=>{
     setDataRol({
       name : onUpdate.name ,
       id : onUpdate.id,
        isActive : onUpdate.isActive
     })
  },[onUpdate])
 
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">Editar Rol</h2>
                <form >
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Nombre del Rol:
                        <input
                            type="text"
                            value={dataRol.name}
                            onChange={(e) => setDataRol({
                              ...dataRol ,
                              name : e.target.value
                            })}
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                    <div className="flex justify-end mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full mr-2"
                        >
                            Cancelar
                        </button>
                        <button
                        onClick={()=> handleUpdate()}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateRol;
