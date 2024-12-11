import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../navigation.model';
import { MAIN_NAV_LINKS } from '../navigation-links';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Input() isMobile: boolean = false;

  links: NavLink[] = MAIN_NAV_LINKS;
  
}
