import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrl: './food-selection.component.css'
})
export class FoodSelectionComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  navigateToListNutritionist() {
    this.router.navigate(['list-nutritionists']).then();
  }
}
