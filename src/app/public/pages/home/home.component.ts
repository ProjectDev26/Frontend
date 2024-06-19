import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedGoalIndex: number | null = null;

  constructor(private router: Router) { }

  navigateToGoal(){
    this.router.navigate(['goal']).then();
  }

  selectGoal(index: number): void {
    this.selectedGoalIndex = index;
  }

}
