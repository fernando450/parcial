export interface inmueble {
  numero_referencia: string;
  tipo: string;
  superficie: number;
  nuevo: boolean;
  direccion: string;
  precio: number;
  estado: 'EN VENTA' | 'ALQUILER';
  propietario: {
    nombre: string;
    correo: string;
    celular_contacto: string;
    telefono_contacto?: string;
  };
  caracteristicas: {
    numero_habitaciones?: number;
    numero_banos?: number;
    piscina?: boolean;
    acondicionado?: boolean;
    parqueadero?: boolean;
    servicios: {
      gas: boolean;
      electrico: boolean;
      acueducto: boolean;
    };
    otro?: string;
  };
  oficina: string;
  visitas: Array<{
    cliente: string;
    fecha: Date;
    comentario?: string;
    estado: 'POR VISITAR' | 'VISITADO';
  }>;
}
