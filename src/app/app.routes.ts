import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing/pricing.component')
    },
    {
        path: 'pokemons/page/:page',
        loadComponent: () => import('./pages/pokemons-page/pokemons-page.component')
    },
    {
        path: 'pokemons/:id',
        loadComponent: () => import('./pages/pokemon-page/pokemon-page.component')
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
