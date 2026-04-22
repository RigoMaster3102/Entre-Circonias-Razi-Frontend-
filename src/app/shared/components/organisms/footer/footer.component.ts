import { Component } from '@angular/core';
import { IconComponent } from "../../atoms/icon/icon.component";

@Component({
  selector: 'app-footer',
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  redesSociales = [
  { name: '/icons/instagram.svg', link: 'https://www.instagram.com/entre.circonias_razi/' },
  { name: '/icons/tiktok.svg', link: 'https://www.tiktok.com/@entre.circonias.razi?lang=es-419' },
  ]
}
