import { Component, input } from '@angular/core';

import { ProductCardComponent } from '../../molecules/product-card/product-card.component';
import { SlicePipe } from '@angular/common';
import { Producto } from '../../../../core/domain/models/product.model';
@Component({
  selector: 'app-novedades-scroll',
  imports: [ProductCardComponent, SlicePipe],
  templateUrl: './novedades-scroll.component.html',
  styleUrl: './novedades-scroll.component.css',
})
export class NovedadesScrollComponent {

  productos = input<Producto[]>();

}
