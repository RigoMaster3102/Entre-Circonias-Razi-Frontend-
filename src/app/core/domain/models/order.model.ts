import { Producto } from "./product.model";
import { Cuenta } from "./user.model";

export interface EstadoDeEnvio {
  id: number;
  nombre: string;
}

export interface Pedidos{
  id: number;
  precioTotal: number;
  fecha: Date;
  hora: Date;
  cantidadCambio: number;
  llevarCambio: boolean;

  estadoEnvio ?: EstadoDeEnvio;
  cuenta ?: Cuenta;

   articulos ?: ProductoPedido[];
}

export interface ProductoPedido{
  id: number;
  cantidadPiezas: number;
  precio: number;
  activo: boolean;
  producto?: Producto;
}
