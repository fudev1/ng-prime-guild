import { Component } from '@angular/core';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { LoginButtonComponent } from '../login-button/login-button.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [
    NavLinksComponent,
    LoginButtonComponent
  ],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
