import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: '',
        loadComponent : () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'home',
        loadComponent : () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'catalog',
        loadComponent : () => import('./pages/catalog/catalog.component').then(c => c.CatalogComponent)
    }
];

