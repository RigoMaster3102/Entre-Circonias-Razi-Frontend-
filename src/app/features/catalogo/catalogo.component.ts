import { Component, inject } from '@angular/core';
import { ProductService } from '../../infrastructure/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo.component',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent {
  private productoService = inject(ProductService);

  inventario = toSignal(this.productoService.getProductos());
}
