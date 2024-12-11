import { Routes } from '@angular/router';
import { NewWorldComponent } from './new-world.component';
import { NewWorldCompaniesComponent } from './pages/new-world-companies/new-world-companies.component';
import { NewWorldNewsComponent } from './pages/new-world-news/new-world-news.component';
import { NewWorldForumComponent } from './pages/new-world-forum/new-world-forum.component';
import { NewWorldWarsComponent } from './pages/new-world-wars/new-world-wars.component';

export const NEW_WORLD_ROUTES: Routes = [
    // {
    //     path: '',
    //     component: NewWorldComponent,
    //     children: [
    //         { path: 'companies', component: NewWorldCompaniesComponent },
    //         { path: 'news', component: NewWorldNewsComponent },
    //         { path: 'forum', component: NewWorldForumComponent },
    //         { path: 'wars', component: NewWorldWarsComponent },
    //         { path: 'servers', component: NewWorldWarsComponent },
    //     ]
    // }
    {
        path: '',
        loadComponent: () => import('./new-world.component').then(m => m.NewWorldComponent),
    },
    {
        path: 'companies',
        loadComponent: () => import('./pages/new-world-companies/new-world-companies.component').then(m => m.NewWorldCompaniesComponent),
    },
    
];