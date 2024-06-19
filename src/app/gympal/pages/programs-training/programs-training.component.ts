import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-programs-training',
  templateUrl: './programs-training.component.html',
  styleUrl: './programs-training.component.css'
})
export class ProgramsTrainingComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['profile/programs']).then();
  }

}
