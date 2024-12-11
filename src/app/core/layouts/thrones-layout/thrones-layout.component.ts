import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-thrones-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './thrones-layout.component.html',
  styleUrl: './thrones-layout.component.scss'
})
export class ThronesLayoutComponent {

}
