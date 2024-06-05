import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.css'
})
export class ChallengeComponent {

  constructor(private router: Router) {
  }

  navigateToTraining(){
    this.router.navigate(['profile/programs/training']).then();
  }

}
