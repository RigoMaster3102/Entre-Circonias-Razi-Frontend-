import { Injectable } from '@angular/core';
import { ProductoRepository } from '../../core/domain/ports/product.repository';
import { Observable, of } from 'rxjs';
import { Producto } from '../../core/domain/models/product.model';
import { PRODUCTOS_MOCK } from '../mocks/product.mock';

@Injectable({
  providedIn: 'root'
})

export class ProductService implements ProductoRepository {
  constructor() { }

  getProductos(): Observable<Producto[]> {
      return of(PRODUCTOS_MOCK);
  }

  getProductosByCriteria(search: string): Observable<Producto[]> {

    if(!search){
      return of(PRODUCTOS_MOCK);
    }

    const searchTermLower = search.toLocaleLowerCase();

    const filteredProducts = PRODUCTOS_MOCK.filter(product => {

      const titleMatch = product.titulo.toLowerCase().includes(searchTermLower);

      const categoryMatch = product.categoria?.nombre.toLowerCase().includes(searchTermLower);

      return titleMatch || categoryMatch;

    });
    return of(filteredProducts);
  }
}
