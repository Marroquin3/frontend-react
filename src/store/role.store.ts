import { create } from 'zustand'
import type { ICreateRol, IDeleteRol, IRoleStore, IUpdateRol } from '../types/roles.types'
import { create_rol, delete_rol, get_rol_list, update_rol } from '../services/roles.service'
import { toast } from 'react-toastify'
export const useRolStore = create<IRoleStore>((set , get)=> ({
    roles : [],
    OnGetRoleList(){
        try {
             get_rol_list().then((res) => {
               
                    set ({ roles : res.data.roles})
                 
             })
        } catch (error) {
             set({ roles : []})
        }
    },
    OnCreateRol(payload : ICreateRol){
          try {
                    create_rol(payload).then((res)=> {
                        if(res.data.ok){
                             get().OnGetRoleList()
                        }
                    })
          } catch (error) {
              console.log("OCURRIO UN ERROR AL CREAR EL ROL ")
          }
    },

    OnUpdateRol(rolId, payload : IUpdateRol){
        try {
             update_rol(rolId, payload).then((res) =>{
                if (res.data.ok){
                    get().OnGetRoleList();
                }
            });
        } catch (error) {
            console.log("OCURRIÓ UN ERROR AL ACTUALIZAR EL ROL");
        }
    },

OnDeleteRol(payload: IDeleteRol) {
    try {
        // Llamar a delete_rol con solo el id
        delete_rol(payload.id).then((res) => {
            if (res.ok) {
                get().OnGetRoleList(); // Actualizar la lista de roles después de la eliminación

                // Mostrar un mensaje de éxito
                toast.success("El rol ha sido eliminado correctamente.", {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        });
    } catch (error) {
        console.log("OCURRIÓ UN ERROR AL ELIMINAR EL ROL");
        toast.error("Hubo un error al intentar eliminar el rol.", {
            position: 'top-right',
            autoClose: 3000,
        });
    }
}

}))