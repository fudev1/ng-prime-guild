import { Injectable, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';


export type ThemeType = 'default' | 'new-world' | 'thrones-liberty';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = signal<ThemeType>('default');
    
  public themeClass = computed(() => `theme-${this.currentTheme()}`);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url.includes('new-world')) {
        this.setTheme('new-world');
      } else if (event.url.includes('thrones-liberty')) {
        this.setTheme('thrones-liberty');
      } else {
        this.setTheme('default');
      }
    });
  }

  setTheme(theme: ThemeType) {
    this.currentTheme.set(theme);
  }
}
