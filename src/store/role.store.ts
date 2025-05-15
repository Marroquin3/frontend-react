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

OnDeleteRol(id) {
    try {
        delete_rol(id).then((res) => {
            if (res.ok) {
                get().OnGetRoleList();
            }
        });
    } catch (error) {
        console.log("El rol ha sido eliminado correctamente.", {
                });
    }
}

}))