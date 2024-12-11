import { Routes } from '@angular/router';
import { ThronesLibertyComponent } from './thrones-liberty.component';
import { ThronesLibertyGuildsComponent } from './thrones-liberty-guilds/thrones-liberty-guilds.component';
import { ThronesLibertyForumComponent } from './thrones-liberty-forum/thrones-liberty-forum.component';
import { ThronesLibertyNewsComponent } from './thrones-liberty-news/thrones-liberty-news.component';

export const THRONES_LIBERTY_ROUTES: Routes = [
    { 
        path: '',
        component: ThronesLibertyComponent,
        children: [
            { path: 'guilds', component: ThronesLibertyGuildsComponent },
            { path: 'forum', component: ThronesLibertyForumComponent },
            { path: 'news', component: ThronesLibertyNewsComponent },
        ]
    }
];