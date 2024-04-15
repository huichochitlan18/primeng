import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { HomeComponent } from "./home/home.component";

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => HomeComponent
            },
            { path: '**', redirectTo: '' },
        ]
    }
]