import { Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
nombre = input.required<string>();
size = input.required<string>();
  esImagenLocal = computed(() => this.nombre().endsWith('.svg') || this.nombre().endsWith('.png'));
}
