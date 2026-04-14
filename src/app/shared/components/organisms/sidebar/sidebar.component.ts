import { Component, inject } from '@angular/core';
import { UiService } from '../../../../infrastructure/services/ui.service';
import { IconComponent } from '../../atoms/icon/icon.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [IconComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  closeSidebar = inject(UiService);
}
