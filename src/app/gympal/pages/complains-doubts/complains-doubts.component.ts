import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-complains-doubts',
  templateUrl: './complains-doubts.component.html',
  styleUrl: './complains-doubts.component.css'
})
export class ComplainsDoubtsComponent {

  constructor(private router: Router) {
  }

  navigateToFrequentQuestions(){
    this.router.navigate(['help-center']).then();
  }
}
