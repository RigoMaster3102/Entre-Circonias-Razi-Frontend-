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

  getProductoById(id: number): Observable<Producto | undefined> {
    return of(PRODUCTOS_MOCK.find(joya => joya.id === id));
  }
}
