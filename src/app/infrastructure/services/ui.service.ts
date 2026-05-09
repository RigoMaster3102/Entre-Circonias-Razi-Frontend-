import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UiService {
  isSidebarOpen = signal(false);

  isSearchOpen = signal(false);

  toggleSidebar(){
    this.isSidebarOpen.update(estadoActual => !estadoActual);
  }

  toogleSearch(){
    this.isSearchOpen.update(estadoActual => !estadoActual)
  }

}
