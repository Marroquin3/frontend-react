export interface IResponseRole {
  ok: boolean
  roles: Role[]
  message: string
}

export interface Role {
  id: number
  name: string
  isActive: boolean
}

export interface ICreateRol {
    name : string 
}

export interface IUpdateRol{
  name : string
}

export interface IDeleteRol{
  id : number
}

  export interface IRoleStore{
    roles: Role[],
    OnGetRoleList : () => void
    OnCreateRol : (payload : ICreateRol) => void
    OnUpdateRol : ( rolId: number, payload : IUpdateRol) => void
    OnDeleteRol : (payload : IDeleteRol) => void 
  }