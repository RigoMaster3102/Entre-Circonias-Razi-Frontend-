import { Observable } from "rxjs";
import { ProductoRepository } from "../domain/ports/product.repository";
import { Producto } from "../domain/models/product.model";

export class GetProductsSearchSidebardUseCase{
    constructor(private _productRepository: ProductoRepository){}

    execute(search: string): Observable<Producto[]>{
      return this._productRepository.getProductosByCriteria(search);
    }
}
