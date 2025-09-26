import supabase from "./supabase";

// Define una clase userModel para estructurar el objeto tipo User
export class userModel {
  id?: string = "";
  nombre!: string;
  email!: string;
  password!: string;
  rol!: string;
}

// Obtiene un usuario por su ID
export const getUser = async (id: string) => {
  console.log("DEBUG - Obteniendo usuario...");
  // Llamada al backend para obtener todos los usuarios
  let user = await supabase.from("usuarios").select("*").eq("id", id);
  // Respuesta de error en la llamada
  if (user.status !== 200) {
    console.error(
      "Error al obtener el usuario:",
      user.error ? user.error.message : "Error desconocido"
    );
    return null;
  }
  console.log(
    "DEBUG - Usuario: ",
    user.data ? user.data[0] : "Error desconocido"
  );
  return user.data ? user.data[0] : "Error desconocido";
};

// Obtiene todos los usuarios
export const getUsers = async () => {
  console.log("DEBUG - Obteniendo usuarios...");
  // Llamada al backend para obtener todos los usuarios
  let users = await supabase.from("usuarios").select("*");
  // Respuesta de error en la llamada
  if (users.status !== 200) {
    console.error(
      "Error al obtener el usuarios:",
      users.error ? users.error.message : "Error desconocido"
    );
    return null;
  }
  console.log("DEBUG - Usuarios: ", users.data);
  return users.data;
};

//Crear un usuario
export const createUser = async (user: userModel) => {
  // Verificar si el correo ya existe
  let users = await getUsers();
  // Realiza la verificación siempre y cuando la llamada a getUsers no sea nula
  if (users) {
    // Buscar coincidencia de correo
    console.log("DEBUG - Buscando coincidencia de correo...");
    let existingUser = users.find(
      (userSearch: userModel) => userSearch.email === user.email
    );
    if (existingUser) {
      console.error("El correo ya está en uso.");
      return null;
    }
    // Si no existe, crear un nuevo usuario
    else {
      // Inicializa una variable en null para almacenar el usuario existente
      let existingUser = null;
      // Inicializa un id para el nuevo usuario
      let id = "";

      // Generar id nuevo siempre que el id este repetido
      console.log("DEBUG - Generando ID único para el nuevo usuario...");
      while (existingUser === null) {
        // Crear un UUID único para el nuevo usuario
        id = crypto.randomUUID();
        console.log("DEBUG - Id creado: ", id);
        // Buscar si el id ya existe
        existingUser = users.find(
          (userSearch: userModel) => userSearch.id === user.id
        );
      }

      user.id = id; // Asignar el id generado al nuevo usuario
      console.log("DEBUG - Usuario creado:", user);

      // Insertar el nuevo usuario en la base de datos
      const response = await supabase.from("usuarios").insert([user]).select();
      console.log("DEBUG - Respuesta de la inserción:", response);
      // Verificar la respuesta de la inserción
      if (response.status !== 201) {
        console.error(
          "Error al crear el usuario:",
          response.error ? response.error.message : "Error desconocido"
        );
        return;
      } else {
        console.log("Usuario creado exitosamente:", response.data);
      }
    }
  }
};

//Actualizar un usuario
export const updateUser = async (id: string, user: userModel) => {
  console.log("Actualizando usuario...");
  // Verificar si el usuario existe
  const existingUser = await getUser(id);
  if (!existingUser) {
    console.error("Usuario no encontrado.");
    return;
  }
  // Llamada al backend para actualizar el usuario
  const response = await supabase
    .from("usuarios")
    .update(user)
    .eq("id", id)
    .select();
  // Verificar la respuesta de la actualización
  if (response.status !== 200) {
    console.error(
      "Error al actualizar el usuario:",
      response.error ? response.error.message : "Error desconocido"
    );
    return;
  } else {
    console.log("DEBUG - Usuario actualizado exitosamente:", response.data);
  }
};

//Eliminar un usuario
export const deleteUser = async (id: string) => {
  // Verificar si el ID ya existe
  let users = await getUsers();
  // Realiza la verificación siempre y cuando la llamada a getUsers no sea nula
  if (users) {
    // Buscar coincidencia de correo
    console.log("DEBUG - Buscando coincidencia de ID...");
    let existingUser = users.find(
      (userSearch: userModel) => userSearch.id === id
    );
    if (existingUser) {
      // Eliminando usuario de la base de datos
      const response = await supabase.from("usuarios").delete().eq("id", id);
      // Verificar la respuesta de la inserción
      console.log("DEBUG - Respuesta de la eliminación:", response);
      if (response.status !== 204) {
        console.error(
          "Error al crear el usuario:",
          response.error ? response.error.message : "Error desconocido"
        );
        return;
      } else {
        console.log("Usuario creado exitosamente:", response.data);
      }
    } else {
      console.error("No existe usuario con id: ", id);
    }
  }
};
