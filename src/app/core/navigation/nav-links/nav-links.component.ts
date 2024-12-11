import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../navigation.model';
import { MAIN_NAV_LINKS } from '../navigation-links';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss',
  providers: [NavigationService]
})
export class NavLinksComponent {
  @Input() isMobile: boolean = false;

  constructor(public navigationService: NavigationService) { }
  
}
