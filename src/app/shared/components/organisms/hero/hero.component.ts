import { Component, input } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  title = input<string>();
  description = input<string>();
  imageUrl = input.required<string>();
  showButton = input.required<boolean>();
  coleccion = input<string>();
}
