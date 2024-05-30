import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.css'
})
export class ProfessionalsComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  navigateToActivityLevel(){
    this.router.navigate(['activity-level']).then();
  }

  navigateToFoodSelection(){
    this.router.navigate(['food-selection']).then();
  }

}
