import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../organisms/header/header.component";
import { FooterComponent } from "../../organisms/footer/footer.component";
import { SidebarComponent } from "../../organisms/sidebar/sidebar.component";
import { UiService } from '../../../../infrastructure/services/ui.service';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, SidebarComponent,],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {

    menuActivo = inject(UiService);

}
