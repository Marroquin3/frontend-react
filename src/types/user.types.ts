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
