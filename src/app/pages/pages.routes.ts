import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => HomeComponent,
      },
      {
        path: 'user',
        loadComponent: () => UserComponent,
      },
      {
        path: 'users',
        loadComponent: () => UsersComponent,
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
