import { Observable } from "rxjs";
import { Producto } from "../models/product.model";

export interface ProductoRepository{
  getProductos(): Observable<Producto[]>;
  getProductoById(id:number):Observable<Producto | undefined>;
}
