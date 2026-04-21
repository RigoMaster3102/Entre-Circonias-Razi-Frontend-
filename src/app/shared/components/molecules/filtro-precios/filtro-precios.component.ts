import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-filtro-precios',
  imports: [CurrencyPipe],
  templateUrl: './filtro-precios.component.html',
  styleUrl: './filtro-precios.component.css',
})
export class FiltroPreciosComponent {

  imageUrl = input<string>();
  precio = input<number>();


}
