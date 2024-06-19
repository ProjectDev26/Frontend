import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-home-goal',
  templateUrl: './home-goal.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrl: './home-goal.component.css'
})
export class HomeGoalComponent {

  selectedGenderIndex: number | null = null;

  constructor(private router: Router) { }

  selectGender(index: number): void {
    this.selectedGenderIndex = index;
  }

  navigateToGoalNext(): void {
    this.router.navigate(['goal/next']).then();
  }

}
