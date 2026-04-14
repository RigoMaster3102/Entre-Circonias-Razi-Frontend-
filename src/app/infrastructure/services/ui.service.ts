import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UiService {
  isSidebarOpen = signal(false);

  toggleSidebar(){
    this.isSidebarOpen.update(estadoActual => !estadoActual);
  }

}
