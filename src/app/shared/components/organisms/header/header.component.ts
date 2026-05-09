import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../../atoms/icon/icon.component';
import { UiService } from '../../../../infrastructure/services/ui.service';
import { RouterLink } from "@angular/router";
import { SearchComponent } from "../../molecules/search/search.component";
@Component({
  selector: 'app-header',
  imports: [IconComponent, RouterLink, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

    menuSidebar = inject(UiService);
    router = inject(Router);
   buscarProducto(texto: string){
      console.log(texto);
        this.router.navigate(['/resultadosBusqueda'], {queryParams: {searchTerm: texto}});
        this.menuSidebar.toogleSearch();
      }

}
