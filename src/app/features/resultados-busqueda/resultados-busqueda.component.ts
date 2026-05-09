import { Component, computed, inject, input } from '@angular/core';
import { MainLayoutComponent } from "../../shared/components/templates/main-layout/main-layout.component";
import { HeroComponent } from "../../shared/components/organisms/hero/hero.component";
import { TitleCasePipe, NgClass } from '@angular/common';
import { GetProductsSearchSidebardUseCase } from '../../core/use-cases/get-products-search-sidebar.use-case';
import { Observable, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from "../../shared/components/molecules/product-card/product-card.component";

@Component({
  selector: 'app-resultados-busqueda',
  imports: [MainLayoutComponent, HeroComponent, TitleCasePipe, ProductCardComponent, NgClass],
  templateUrl: './resultados-busqueda.component.html',
  styleUrl: './resultados-busqueda.component.css',
})
export class ResultadosBusquedaComponent {

  categoryName = input<string>();
  searchTerm = input<string>();

      private _searchUseCase = inject(GetProductsSearchSidebardUseCase);

  heroImage = computed(() => {

    const category = this.categoryName()?.toUpperCase();
    const search = this.searchTerm()?.toUpperCase();


    if (category === 'ANILLOS' || search === 'ANILLOS') return '/images/Anillos.png';
    if (category === 'BRAZALETES' || search === 'BRAZALETES') return '/images/Brazaletes.png';
    if (category === 'COLLARES' || search === 'COLLARES') return '/images/Collares.png';
    if (category === 'ARETES' || search === 'ARETES') return '/images/Aretes.png';

    return '';
  });


  pageTitle = computed(() => {
    const category = this.categoryName();
    const search = this.searchTerm();

    if (category) return category;
    if (search) return search;

    return 'No results found';
  });

  private _searchCriteria$ = toObservable(this.pageTitle);

  products = toSignal(
    this._searchCriteria$.pipe(
      switchMap(criteria => this._searchUseCase.execute(criteria))
    ),
    {initialValue: []}
  );


}
