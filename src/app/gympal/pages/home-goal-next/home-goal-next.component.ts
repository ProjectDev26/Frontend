import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-goal-next',
  templateUrl: './home-goal-next.component.html',
  styleUrl: './home-goal-next.component.css'
})
export class HomeGoalNextComponent {

  constructor(private router: Router) {
  }

  navigateToProfessionals(){
    this.router.navigate(['professionals']).then();
  }

}
