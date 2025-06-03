export interface IResponseUser {
  ok: boolean
  users: User[]
  status: number
}

export interface User {
  id: number
  userName: string
  password: string
  role: Role
  roleId: number
  active: boolean
}

export interface Role {
  id: number
  name: string
  isActive: boolean
}

export interface ICreateUser{
  userName : string
  password : string
  roleId: number
  role : Role
}

export interface IUpdateUser{
  userName : string
  password : string
  roleId: number
  role : Role
}

export interface IUserStore{
  user : User[],
  OnGetUserList : ()=> void
  OnCreateUser : (payload : ICreateUser) => void
  OnUpdateUser : ( userId: number, payload : IUpdateUser) => void
  OnDeleteUser : (id : number) => void
}
