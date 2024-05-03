import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gymPal';
  paths = '/home';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/subscriptions', title: 'Renew'},
    {path: '/professionals', title: 'Professionals'},
    {path: '/profile', title: 'Profile'},
  ]
}
