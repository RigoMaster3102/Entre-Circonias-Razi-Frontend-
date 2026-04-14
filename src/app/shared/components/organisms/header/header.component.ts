import { Component, inject } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { UiService } from '../../../../infrastructure/services/ui.service';
@Component({
  selector: 'app-header',
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

    menuSidebar = inject(UiService);


}
