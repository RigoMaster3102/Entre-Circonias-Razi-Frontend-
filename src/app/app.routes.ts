import { Routes } from '@angular/router';


export const routes: Routes = [

{
  path: '',
  loadComponent:() => import('./features/home/home.component').then(c => c.HomeComponent)
},
{
  path: 'resultadosBusqueda',
  loadComponent:() => import('./features/resultados-busqueda/resultados-busqueda.component').then(c => c.ResultadosBusquedaComponent)

}
];
