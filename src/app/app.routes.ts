import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon-routing.module').then((m) => m.PokemonRoutingModule),
  },
  { path: '', redirectTo: 'pokemon/list', pathMatch: 'full' },
];
