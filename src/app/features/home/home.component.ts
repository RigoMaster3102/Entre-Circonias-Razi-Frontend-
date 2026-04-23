import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../shared/components/organisms/hero/hero.component';
import { NovedadesScrollComponent } from "../../shared/components/organisms/novedades-scroll/novedades-scroll.component";
import { FiltrosPreciosAgrupadosComponent } from "../../shared/components/organisms/filtros-precios-agrupados/filtros-precios-agrupados.component";
import { DescripcionEmpresaComponent } from "../../shared/components/organisms/descripcion-empresa/descripcion-empresa.component";
import { MainLayoutComponent } from "../../shared/components/templates/main-layout/main-layout.component";
import { ProductService } from '../../infrastructure/services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, NovedadesScrollComponent, FiltrosPreciosAgrupadosComponent, DescripcionEmpresaComponent, MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

    novedades = inject(ProductService);
    productos = toSignal(this.novedades.getProductos());
}
