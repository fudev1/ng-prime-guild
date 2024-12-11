import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LogoComponent,
    NavLinksComponent,
    LoginButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
