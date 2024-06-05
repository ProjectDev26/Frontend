import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {

  constructor(private router: Router) {
  }

  navigateToTraining(){
    this.router.navigate(['profile/programs/training']).then();
  }
}
