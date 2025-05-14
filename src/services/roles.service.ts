import axios from 'axios'
import { API_URL } from '../utils/constants'
import type { ICreateRol, IResponseRole } from '../types/roles.types';



export const create_rol = async (payload : ICreateRol) => {
      return axios.post<{ok : boolean}> (API_URL + "/roles" , payload)
  };
  
  export const get_rol_list = async () => {
   return axios.get<IResponseRole>(API_URL + "/roles")
  };


  export const get_rol_id = async (id: number) => {
    const { data } = await axios.get<{ roles: IResponseRole[] }>(
      API_URL + "/roles" + id,
     
    );
    return data;
  };
  
  export const update_rol = async (id: number, payload: Partial<ICreateRol>) => {
    return axios.patch<{ok : boolean}> (`${API_URL}/roles/${id}`, payload);
  }

  export const delete_rol = async (id: number) => {
    const { data } = await axios.delete<{ ok:boolean , msg:string }>(
      API_URL + "/roles/" + id,
      
    );
    return data;
  };
  