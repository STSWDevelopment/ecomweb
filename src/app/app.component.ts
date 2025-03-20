import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecomweb';
}
