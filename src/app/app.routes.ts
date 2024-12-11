import { Routes } from '@angular/router';
import { HomeComponent } from './p-main/home.component';
import { NewWorldComponent } from './p-new-world/new-world.component';
import { ThronesLibertyComponent } from './p-thrones-liberty/thrones-liberty.component';
import { AboutComponent } from './p-main/about/about.component';
import { ContactComponent } from './p-main/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new-world', component: NewWorldComponent},
    {path: 'thrones-liberty', component: ThronesLibertyComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
];
