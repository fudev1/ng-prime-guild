import { Injectable, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NavLink } from '../navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private currentLinks = signal<NavLink[]>([
    { path: '/new-world', label: 'New World' },
    { path: '/thrones-liberty', label: 'Thrones & Liberty' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]);

  links = computed(() => this.currentLinks());

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateNavigation(event.url);
    });
  }

  private updateNavigation(url: string) {
    if (url.includes('new-world')) {
      this.currentLinks.set([
        { path: '/new-world', label: 'New World' },
        { path: '/new-world/companies', label: 'Companies' },
        { path: '/new-world/news', label: 'News' },
        { path: '/new-world/wars', label: 'Wars' },
        { path: '/new-world/servers', label: 'Servers' },
        { path: '/new-world/forum', label: 'Forum' }
      ]);
    } else if (url.includes('thrones-liberty')) {
      this.currentLinks.set([
        { path: '/thrones-liberty', label: 'Home' },
        { path: '/thrones-liberty/guilds', label: 'Guilds' },
        { path: '/thrones-liberty/news', label: 'News' },
        { path: '/thrones-liberty/events', label: 'Events' },
        { path: '/thrones-liberty/forum', label: 'Forum' }
      ]);
    } else {
      this.currentLinks.set([
        { path: '/new-world', label: 'New World' },
        { path: '/thrones-liberty', label: 'Thrones & Liberty' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
      ]);
    }
  }
}
