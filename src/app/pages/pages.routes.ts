import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import * as Pages from '.';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => Pages.HomeComponent,
      },
      {
        path: 'signals/example',
        loadComponent: () => Pages.ExampleComponent,
      },
      {
        path: 'signals/example-2',
        loadComponent: () => Pages.Example2Component,
      },
      {
        path: 'signals/observables-to-signals',
        loadComponent: () => Pages.ObservablesToSignalsComponent,
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
