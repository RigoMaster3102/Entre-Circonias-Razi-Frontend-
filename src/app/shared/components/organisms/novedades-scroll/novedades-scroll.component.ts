import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../infrastructure/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-novedades-scroll',
  imports: [ProductCardComponent, SlicePipe],
  templateUrl: './novedades-scroll.component.html',
  styleUrl: './novedades-scroll.component.css',
})
export class NovedadesScrollComponent {

  novedades = inject(ProductService);
  productos = toSignal(this.novedades.getProductos());



}
