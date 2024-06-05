import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-suscriptions',
  templateUrl: './suscriptions.component.html',
  styleUrl: './suscriptions.component.css'
})
export class SuscriptionsComponent {

  constructor(private router: Router) {
  }

  navigateToPayments(){
    this.router.navigate(['subscriptions/payments']).then();
  }

}
