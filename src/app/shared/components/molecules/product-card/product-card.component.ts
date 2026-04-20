import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IconComponent } from '../../atoms/icon/icon.component';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, IconComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  imageUrl = input<string>('');
  name = input<string>('');
  price = input<number>(0);
  isMoreButton = input<boolean>(false);
}
