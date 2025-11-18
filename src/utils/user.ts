import supabase from "./supabase";

/* ===========================================================
   USER MODEL (TypeScript)
   =========================================================== */
export interface userModel {
  id?: string;
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

/* ===========================================================
   GET USER BY ID
   =========================================================== */
export const getUser = async (id: string): Promise<userModel | null> => {
  console.log("DEBUG: Obteniendo usuario por ID...");

  const { data, error, status } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id", id)
    .single();

  if (error || status !== 200) {
    console.error("DEBUG: Error al obtener el usuario:", error?.message);
    return null;
  }

  console.log("DEBUG: Usuario encontrado:", data);
  return data as userModel;
};

/* ===========================================================
   GET ALL USERS
   =========================================================== */
export const getUsers = async (): Promise<userModel[] | null> => {
  console.log("DEBUG: Obteniendo todos los usuarios...");

  const { data, error, status } = await supabase
    .from("usuarios")
    .select("*");

  if (error || status !== 200) {
    console.error("DEBUG: Error al obtener los usuarios:", error?.message);
    return null;
  }

  console.log("DEBUG: Usuarios obtenidos:", data);
  return data as userModel[];
};

/* ===========================================================
   CREATE USER
   =========================================================== */
export const createUser = async (user: userModel): Promise<userModel[] | null> => {
  console.log("DEBUG: Intentando crear usuario...");

  // Validación de campos obligatorios
  if (!user.nombre || !user.email || !user.password || !user.rol) {
    console.error("DEBUG: Faltan campos obligatorios para crear usuario.");
    return null;
  }

  // Verificar email duplicado
  console.log("DEBUG: Verificando si el email ya existe...");
  const users = await getUsers();

  if (!users) {
    console.error("DEBUG: No se pudieron obtener usuarios.");
    return null;
  }

  if (users.some(u => u.email === user.email)) {
    console.error("DEBUG: El correo ya está en uso.");
    return null;
  }

  // Generar ID único
  console.log("DEBUG: Generando ID único...");
  let newId: string = "";
  let exists = true;

  while (exists) {
    newId = crypto.randomUUID();
    exists = users.some(u => u.id === newId);
  }

  user.id = newId;

  console.log("DEBUG: ID generado:", newId);
  console.log("DEBUG: Insertando usuario...");

  const { data, error, status } = await supabase
    .from("usuarios")
    .insert([user])
    .select();

  if (error || status !== 201) {
    console.error("DEBUG: Error al crear el usuario:", error?.message);
    return null;
  }

  console.log("DEBUG: Usuario creado exitosamente:", data);
  return data as userModel[];
};

/* ===========================================================
   UPDATE USER
   =========================================================== */
export const updateUser = async (
  id: string,
  updateValues: Partial<userModel>
): Promise<userModel[] | null> => {
  console.log("DEBUG: Actualizando usuario...");

  const existingUser = await getUser(id);

  if (!existingUser) {
    console.error("DEBUG: Usuario no encontrado.");
    return null;
  }

  // Evitar actualizar el ID
  if ("id" in updateValues) {
    delete updateValues.id;
  }

  const { data, error, status } = await supabase
    .from("usuarios")
    .update(updateValues)
    .eq("id", id)
    .select();

  if (error || status !== 200) {
    console.error("DEBUG: Error al actualizar el usuario:", error?.message);
    return null;
  }

  console.log("DEBUG: Usuario actualizado exitosamente:", data);
  return data as userModel[];
};

/* ===========================================================
   DELETE USER
   =========================================================== */
export const deleteUser = async (id: string): Promise<boolean> => {
  console.log("DEBUG: Eliminando usuario...");

  const users = await getUsers();

  if (!users) {
    console.error("DEBUG: No se pudieron obtener usuarios.");
    return false;
  }

  if (!users.some(u => u.id === id)) {
    console.error("DEBUG: No existe usuario con ID:", id);
    return false;
  }

  const { error, status } = await supabase
    .from("usuarios")
    .delete()
    .eq("id", id);

  if (error || (status !== 200 && status !== 204)) {
    console.error("DEBUG: Error al eliminar el usuario:", error?.message);
    return false;
  }

  console.log("DEBUG: Usuario eliminado exitosamente.");
  return true;
};
