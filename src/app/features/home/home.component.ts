import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/organisms/header/header.component';
import { UiService } from '../../infrastructure/services/ui.service';
import { SidebarComponent } from '../../shared/components/organisms/sidebar/sidebar.component';
import { HeroComponent } from '../../shared/components/organisms/hero/hero.component';
import { NovedadesScrollComponent } from "../../shared/components/organisms/novedades-scroll/novedades-scroll.component";
import { FiltrosPreciosAgrupadosComponent } from "../../shared/components/organisms/filtros-precios-agrupados/filtros-precios-agrupados.component";
import { DescripcionEmpresaComponent } from "../../shared/components/organisms/descripcion-empresa/descripcion-empresa.component";
import { FooterComponent } from "../../shared/components/organisms/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent, HeaderComponent, HeroComponent, NovedadesScrollComponent, FiltrosPreciosAgrupadosComponent, DescripcionEmpresaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
    menuActivo = inject(UiService);
}
