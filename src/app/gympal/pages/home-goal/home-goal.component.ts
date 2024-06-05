import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-goal',
  templateUrl: './home-goal.component.html',
  standalone: true,
  styleUrl: './home-goal.component.css'
})
export class HomeGoalComponent {

  constructor(private router: Router) {
  }

  navigateToGoalNext(){
    this.router.navigate(['goal/next']).then();
  }

}
