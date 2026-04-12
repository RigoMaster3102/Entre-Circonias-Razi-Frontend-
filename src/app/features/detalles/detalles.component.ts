import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../infrastructure/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalles-component',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
private route = inject(ActivatedRoute);

private joyaBuscada = inject(ProductService);

joya = toSignal( this.joyaBuscada.getProductoById(+this.route.snapshot.paramMap.get('id')!))

}
