import { Routes } from '@angular/router';


export const routes: Routes = [

{
  path: '',
  loadComponent:() => import('./features/catalogo/catalogo.component').then(c => c.CatalogoComponent)
},
{
path: 'detalles/:id',
loadComponent:() => import('./features/detalles/detalles.component').then(c => c.DetallesComponent)

}
];
