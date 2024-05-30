import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-activity-level',
  templateUrl: './activity-level.component.html',
  styleUrl: './activity-level.component.css'
})
export class ActivityLevelComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  navigateToListCoaches() {
    this.router.navigate(['list-coaches']).then();
  }
}
