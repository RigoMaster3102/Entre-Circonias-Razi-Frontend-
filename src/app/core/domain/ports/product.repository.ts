import { Observable } from "rxjs";
import { Producto } from "../models/product.model";

export interface ProductoRepository{
  getProductos(): Observable<Producto[]>;
  getProductosByCriteria(search: string): Observable<Producto[]>;
}
