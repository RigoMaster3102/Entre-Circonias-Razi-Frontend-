import { Component, input } from '@angular/core';
import { FiltroPreciosComponent } from "../../molecules/filtro-precios/filtro-precios.component";
import { FiltroPrecio } from '../../../../core/domain/models/filtro-precio.model';


@Component({
  selector: 'app-filtros-precios-agrupados',
  imports: [FiltroPreciosComponent],
  templateUrl: './filtros-precios-agrupados.component.html',
  styleUrl: './filtros-precios-agrupados.component.css',
})
export class FiltrosPreciosAgrupadosComponent {

filtro = input<FiltroPrecio[]>()

}
