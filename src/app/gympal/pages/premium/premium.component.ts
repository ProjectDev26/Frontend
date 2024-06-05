import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent {

  constructor(private router: Router) {
  }

  navigateToChallenge(){
    this.router.navigate(['profile/premium/challenge']).then();
  }
}
