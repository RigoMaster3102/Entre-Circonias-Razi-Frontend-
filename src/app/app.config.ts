import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ProductService } from './infrastructure/services/product.service';
import { GetProductsUseCase } from './core/use-cases/get-products.use-case';
import { GetProductsSearchSidebardUseCase } from './core/use-cases/get-products-search-sidebar.use-case';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()), provideClientHydration(withEventReplay()),

    ProductService,

    {
      provide: GetProductsUseCase,
      useFactory: (repo: ProductService) => new GetProductsUseCase(repo),
      deps: [ProductService]
    },
    {
      provide: GetProductsSearchSidebardUseCase,
      useFactory:(repo: ProductService) => new GetProductsSearchSidebardUseCase(repo),
      deps: [ProductService]
    }
  ]
};
