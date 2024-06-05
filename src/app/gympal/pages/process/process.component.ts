import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {

  constructor(private router: Router) {
  }
  navigateToAnalysis() {
    this.router.navigate(['profile/premium/process/analysis']).then();
  }
}
