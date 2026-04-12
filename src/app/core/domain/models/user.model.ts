export interface DireccionDeEntrega{
  id: number;
  nombre: string;
}

export interface Cuenta{
  id: number;
  nombre: string;
  apellidos: string;
  numeroContacto: string;
  correoElectronico: string;
  password: string;
  tipoCuenta: boolean;

  direccionEntrega?: DireccionDeEntrega;
}


