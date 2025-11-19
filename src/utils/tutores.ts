import supabase from "./supabase";

/* ===========================================================
   TUTOR MODEL
   =========================================================== */

export interface tutorModel {
  id_usuario: string;
  titulo_profesional?: string;
  asignaturas?: string[];
  descripcion?: string;
  idiomas?: string[];
  niveles?: string[];
  modalidades?: string[];
  tarifa_online?: number;
  tarifa_presencial?: number;
  horario?: any;
}

/* ===========================================================
   GET TUTOR BY USER ID
   =========================================================== */
export const getTutor = async (
  id_usuario: string
): Promise<tutorModel | null> => {
  const { data, error } = await supabase
    .from("tutores")
    .select("*")
    .eq("id_usuario", id_usuario)
    .single();

  if (error) {
    console.error("DEBUG: Error obteniendo tutor:", error.message);
    return null;
  }

  return data as tutorModel;
};

/* ===========================================================
   GET ALL TUTORS
   =========================================================== */
export const getTutores = async (): Promise<tutorModel[] | null> => {
  const { data, error } = await supabase.from("tutores").select("*");

  if (error) {
    console.error("DEBUG: Error listando tutores:", error.message);
    return null;
  }

  return data as tutorModel[];
};

/* ===========================================================
   CREATE TUTOR
   =========================================================== */
export const createTutor = async (
  tutor: tutorModel
): Promise<tutorModel | null> => {
  if (!tutor.id_usuario) {
    console.error("DEBUG: id_usuario es obligatorio para crear tutor.");
    return null;
  }

  // Verificar si ya existe
  const existing = await getTutor(tutor.id_usuario);
  if (existing) {
    console.error("DEBUG: Este usuario ya es tutor.");
    return null;
  }

  const { data, error } = await supabase
    .from("tutores")
    .insert(tutor)
    .select()
    .single();

  if (error) {
    console.error("DEBUG: Error creando tutor:", error.message);
    return null;
  }

  return data as tutorModel;
};

/* ===========================================================
   UPDATE TUTOR
   =========================================================== */
export const updateTutor = async (
  id_usuario: string,
  updateValues: Partial<tutorModel>
): Promise<tutorModel | null> => {
  if ("id_usuario" in updateValues) delete updateValues.id_usuario;

  const { data, error } = await supabase
    .from("tutores")
    .update(updateValues)
    .eq("id_usuario", id_usuario)
    .select()
    .single();

  if (error) {
    console.error("DEBUG: Error actualizando tutor:", error.message);
    return null;
  }

  return data as tutorModel;
};

/* ===========================================================
   DELETE TUTOR
   =========================================================== */
export const deleteTutor = async (id_usuario: string): Promise<boolean> => {
  const { error } = await supabase
    .from("tutores")
    .delete()
    .eq("id_usuario", id_usuario);

  if (error) {
    console.error("DEBUG: Error eliminando tutor:", error.message);
    return false;
  }

  return true;
};
