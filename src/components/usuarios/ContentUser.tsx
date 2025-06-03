import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUserStore } from "../../store/user.store";
import type { ICreateUser, Role } from "../../types/user.types";
import axios from "axios";

function UserList() {
  const { user, OnGetUserList, OnCreateUser, OnUpdateUser } = useUserStore();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState<number | "">("");
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    OnGetUserList();
  }, []);

  const handleApiUpdate = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/update"); // Usa tu URL real de backend
      toast.success(res.data.message || "API actualizada correctamente.");
    } catch (error) {
      toast.error("Error al actualizar la API.");
      console.error(error);
    }
  };

  const handleCreateUser = async () => {
    if (!userName.trim()) {
      toast.error("Por favor ingresa un nombre para el usuario.");
      return;
    }

    const newUser: ICreateUser = {
      userName,
      password,
      roleId: Number(roleId),
      role: role as Role
    };

    try {
      await OnCreateUser(newUser);
      toast.success("Usuario creado correctamente.");
      setUserName("");
      setPassword("");
      setRoleId("");
      setRole(null);
    } catch (error) {
      toast.error("Error al crear el usuario.");
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Crear Nuevo Usuario</h2>

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
      />

      <input
        type="number"
        placeholder="ID del Rol"
        value={roleId}
        onChange={(e) => setRoleId(Number(e.target.value))}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3"
      />

      {/* Si deseas ingresar manualmente el nombre del rol */}
      <input
        type="text"
        placeholder="Nombre del Rol"
        value={role?.name || ""}
        onChange={(e) => setRole({ id: Number(roleId) || 0, name: e.target.value, isActive: true })}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />

      <button
        onClick={handleCreateUser}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Guardar Usuario
      </button>

      <button
        onClick={handleApiUpdate}
        className="w-full bg-green-600 text-white py-2 rounded-lg mt-4 hover:bg-green-700 transition"
      >
        Actualizar API
      </button>
    </div>
  );
}

export default UserList;
