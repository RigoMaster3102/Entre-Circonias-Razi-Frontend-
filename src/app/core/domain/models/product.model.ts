export interface Material{
  id: number;
  nombre: string;
}

export interface FotoProducto {
  id: number;
  url: string;
}

export interface Sexo{
  id: number;
  nombre: string;
}


export interface Collection{
  id: number;
  nombre: string;
}

export interface Producto{
  id: number;
  titulo: string;
  precio: number;
  piezasDisponibles: number;
  descripcion: string;
  talla: number;
  estilo: string;
  disponible: boolean;
  material ?: Material;
  sexo ?: Sexo;
  collection ?: Collection;

  fotos: FotoProducto[];
}
