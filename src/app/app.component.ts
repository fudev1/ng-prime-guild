import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './core/navigation/navbar.component';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ButtonModule,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {
  title = 'ng-prime-guild';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
 
}
