
export interface Visita {
  cliente: string;
  fecha: Date;
  comentario?: string;
  estado: 'POR VISITAR' | 'VISITADO';
}
