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

  navigateToExclusiveContent(){
    this.router.navigate(['profile/premium/exclusive-content']).then();
  }

  navigateToProcess(){
    this.router.navigate(['profile/premium/process']).then();
  }
}
