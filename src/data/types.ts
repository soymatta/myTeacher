// types.ts

export interface Message {
  id: number;
  content: string;
  isSender: boolean; // true si es el mensaje enviado por el usuario actual (burbuja azul), false si es del contacto (burbuja celeste)
}

export interface Contact {
  id: number;
  name: string;
  status: string;
  avatarUrl: string;
}