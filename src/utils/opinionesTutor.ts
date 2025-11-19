import supabase from "./supabase";

/* ===========================================================
   OPINION TUTOR MODEL
   =========================================================== */

export interface opinionTutorModel {
  id: string;
  id_tutor: string;
  id_estudiante: string | null;
  rating: number;
  comentario?: string;
  fecha?: string;
}

/* ===========================================================
   GET OPINION BY ID
   =========================================================== */
export const getOpinion = async (
  id: string
): Promise<opinionTutorModel | null> => {
  const { data, error } = await supabase
    .from("opiniones_tutor")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("DEBUG: Error obteniendo opinión:", error.message);
    return null;
  }

  return data as opinionTutorModel;
};

/* ===========================================================
   GET OPINIONES DE UN TUTOR
   =========================================================== */
export const getOpinionsByTutor = async (
  id_tutor: string
): Promise<opinionTutorModel[] | null> => {
  const { data, error } = await supabase
    .from("opiniones_tutor")
    .select("*")
    .eq("id_tutor", id_tutor)
    .order("fecha", { ascending: false });

  if (error) {
    console.error(
      "DEBUG: Error obteniendo opiniones del tutor:",
      error.message
    );
    return null;
  }

  return data as opinionTutorModel[];
};

/* ===========================================================
   GET ALL OPINIONS
   =========================================================== */
export const getOpiniones = async (): Promise<opinionTutorModel[] | null> => {
  try {
    const { data, error } = await supabase
      .from("opiniones_tutor")
      .select("*")
      .order("fecha", { ascending: false });

    if (error) {
      console.error("DEBUG: Error obteniendo opiniones:", error.message);
      return null;
    }

    return data as opinionTutorModel[];
  } catch (err) {
    console.error("DEBUG: Excepción obteniendo opiniones:", err);
    return null;
  }
};

/* ===========================================================
   CREATE OPINION
   =========================================================== */
export const createOpinion = async (
  opinion: opinionTutorModel
): Promise<opinionTutorModel | null> => {
  if (!opinion.id_tutor || !opinion.id_estudiante || !opinion.rating) {
    console.error("DEBUG: Faltan campos obligatorios para crear opinión.");
    return null;
  }

  const { data, error } = await supabase
    .from("opiniones_tutor")
    .insert(opinion)
    .select()
    .single();

  if (error) {
    console.error("DEBUG: Error creando opinión:", error.message);
    return null;
  }

  return data as opinionTutorModel;
};

/* ===========================================================
   UPDATE OPINION
   =========================================================== */
export const updateOpinion = async (
  id: string,
  updateValues: Partial<opinionTutorModel>
): Promise<opinionTutorModel | null> => {
  if ("id" in updateValues) delete updateValues.id;

  const { data, error } = await supabase
    .from("opiniones_tutor")
    .update(updateValues)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("DEBUG: Error actualizando opinión:", error.message);
    return null;
  }

  return data as opinionTutorModel;
};

/* ===========================================================
   DELETE OPINION
   =========================================================== */
export const deleteOpinion = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from("opiniones_tutor")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("DEBUG: Error eliminando opinión:", error.message);
    return false;
  }

  return true;
};
