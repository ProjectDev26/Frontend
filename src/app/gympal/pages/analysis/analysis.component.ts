import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['profile/premium/process']).then();
  }
}
