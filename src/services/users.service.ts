import axios from 'axios'
import { API_URL } from '../utils/constants'
import type { ICreateUser, IResponseUser } from '../types/user.types';


export const create_user = async (payload : ICreateUser) => {
        return axios.post<{ok : boolean}> (API_URL + "/users" , payload)
    };

    export const get_user_list = async () => {
    return axios.get<IResponseUser>(API_URL + "/users")
    };

    export const get_user_id = async (id: number) => {
    const { data } = await axios.get<{ roles: IResponseUser[] }>(
    API_URL + "/users" + id,
    
    );
    return data;
    };

    export const update_user = async (id: number, payload: Partial<ICreateUser>) => {
    return axios.patch<{ok : boolean}> (`${API_URL}/users/${id}`, payload);
    }

    export const delete_user = async (id: number) => {
    const { data } = await axios.delete<{ ok:boolean , msg:string }>(
        API_URL + "/users/" + id,
    );
    return data;
    };