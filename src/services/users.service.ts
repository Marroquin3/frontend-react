// src/services/users.service.ts

import axios from "axios";
import { API_URL } from "../utils/constants";
import type { IResponseUser } from "../types/user.types";

export const get_all_roles = () => {
  return axios.get<IResponseUser>(API_URL + "/users/filtrar");
};

export const get_users =(
    
) =>{
    return axios.get<IResponseUser>(API_URL + "users")
}
export function get_user_paginated(page: number, limit: number, userName: string, role: string, active: number): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function get_users_list(): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function save_user(payload: Partial<IResponseUser>): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function patch_user(payload: Partial<IResponseUser>, id: number): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

export function delete_user(id: number): { data: any; } | PromiseLike<{ data: any; }> {
    throw new Error('Function not implemented.');
}

