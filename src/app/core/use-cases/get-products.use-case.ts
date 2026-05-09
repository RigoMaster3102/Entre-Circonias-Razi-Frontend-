import { Observable } from 'rxjs';
import { Producto } from '../domain/models/product.model';
import { ProductoRepository } from '../domain/ports/product.repository';

export class GetProductsUseCase {
  constructor(private _productRepository: ProductoRepository) {}

  execute(): Observable<Producto[]> {

    return this._productRepository.getProductos();
  }
}
