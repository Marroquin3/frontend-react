import { create } from 'zustand'
import type { ICreateUser, IUpdateUser, IUserStore } from '../types/user.types'
import { create_user, delete_user, get_user_list, update_user } from '../services/users.service'

export const useUserStore = create<IUserStore>((set, get) => ({
    user: [],
    OnGetUserList() {
    try {
        get_user_list().then((res) => {
        set({ user: res.data.users })
        })
    } catch (error) {
        set({ user: [] })
    }
    },

        OnCreateUser(payload : ICreateUser){
            try {
                        create_user(payload).then((res)=> {
                            if(res.data.ok){
                                get().OnGetUserList()
                            }
                        })
            } catch (error) {
                console.log("OCURRIO UN ERROR AL CREAR EL USUARIO ")
            }
        },

        OnUpdateUser(rolId, payload : IUpdateUser){
                try {
                    update_user(rolId, payload).then((res) =>{
                        if (res.data.ok){
                            get().OnGetUserList();
                        }
                    });
                } catch (error) {
                    console.log("OCURRIÓ UN ERROR AL ACTUALIZAR EL USUARIO");
                }
            },

            OnDeleteUser(id) {
                try {
                    delete_user(id).then((res) => {
                        if (res.ok) {
                            get().OnGetUserList();
                        }
                    });
                } catch (error) {
                    console.log("El rol ha sido eliminado correctamente.", {
                            });
                }
            }
}))
