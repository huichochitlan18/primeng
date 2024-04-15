import { Routes } from '@angular/router';
import { pagesRoutes } from './pages/pages.routes';
import { NotFoundComponent } from './pages/notFound/notFound.component';

export const routes: Routes = [
    { path: '', loadChildren: () => pagesRoutes },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', loadComponent: () => NotFoundComponent },
];
