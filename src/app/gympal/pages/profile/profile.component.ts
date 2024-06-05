import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private router: Router) {
  }

  navigateToPrograms(){
    this.router.navigate(['profile/programs']).then();
  }

  navigateToPremium(){
    this.router.navigate(['profile/premium']).then();
  }
}
