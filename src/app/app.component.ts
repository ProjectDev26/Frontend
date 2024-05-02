import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gymPal';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/suscriptions', title: 'Suscriptions'},
    {path: '/testimonials', title: 'Testimonials'},
    {path: '/professionals', title: 'Professionals'}
  ]
}
