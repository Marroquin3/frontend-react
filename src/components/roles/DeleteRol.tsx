// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRolStore } from '../../store/role.store';

// interface DeleteRolProps {
//   roleToDelete: { id: number; roleName: string } | null;
//   onClose: () => void;
// }

// const DeleteRol: React.FC<DeleteRolProps> = ({ roleToDelete, onClose }) => {
//   const { OnDeleteRol } = useRolStore();
  
//   const confirmDelete = async () => {
//     if (roleToDelete) {
//       try {
//         await OnDeleteRol(roleToDelete.id);  // Llamada para eliminar el rol
//         toast.success(`Rol "${roleToDelete.roleName}" eliminado correctamente`, {
//           position: 'top-right',
//           autoClose: 3000,
//         });
//         onClose();  // Cerrar el modal después de la eliminación
//       } catch (error) {
//         toast.error('Hubo un error al eliminar el rol');
//       }
//     }
//   };

//   const cancelDelete = () => {
//     onClose();  // Simplemente cerrar el modal si no se confirma la eliminación
//   };

//   if (!roleToDelete) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//         <p className="mb-4">
//           ¿Estás seguro de que deseas eliminar el rol <strong>"{roleToDelete.roleName}"</strong>?
//         </p>
//         <div className="flex justify-center">
//           <button
//             onClick={confirmDelete}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Sí, eliminar
//           </button>
//           <button
//             onClick={cancelDelete}
//             className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4"
//           >
//             Cancelar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteRol;
