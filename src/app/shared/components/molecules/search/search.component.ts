import { Component, inject, output } from '@angular/core';
import { IconComponent } from "../../atoms/icon/icon.component";
import { UiService } from '../../../../infrastructure/services/ui.service';

@Component({
  selector: 'app-search',
  imports: [IconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

    searchActive =  inject(UiService);

    terminoBusqueda = output<string>();
}
