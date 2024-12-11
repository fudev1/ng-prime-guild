import { Routes } from '@angular/router';
import { HomeComponent } from './p-main/home.component';
import { AboutComponent } from './p-main/about/about.component';
import { ContactComponent } from './p-main/contact/contact.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { NewWorldLayoutComponent } from './core/layouts/new-world-layout/new-world-layout.component';
import { ThronesLayoutComponent } from './core/layouts/thrones-layout/thrones-layout.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./p-main/home.component').then(m => m.HomeComponent),
    },
    { path: 'about', loadComponent: () => import('./p-main/about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./p-main/contact/contact.component').then(m => m.ContactComponent) },
    // { 
    //     path: '', 
    //     component: MainLayoutComponent,
    //     children: [
    //         { path: '', component: HomeComponent },
    //         { path: 'about', component: AboutComponent },
    //         { path: 'contact', component: ContactComponent },
    //     ]
    //  },
    { 
        path: 'new-world',
        loadChildren: () => import('./p-new-world/new-world.routes').then(m => m.NEW_WORLD_ROUTES) 
    },
    { 
        path: 'thrones-liberty', 
        component: ThronesLayoutComponent,
        loadChildren: () => import('./p-thrones-liberty/thrones-liberty.routes').then(m => m.THRONES_LIBERTY_ROUTES) 
    },
];
