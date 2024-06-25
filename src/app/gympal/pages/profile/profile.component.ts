import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileApiService} from "../../services/profile-api.service";
import {Profile} from "../../model/profile.entity";
import {AuthenticationService} from "../../../iam/services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  profile: Profile = new Profile();
  profileId = '';

  constructor(private router: Router, private profileApi: ProfileApiService,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.currentUserId.subscribe(userId => {
      if (userId) {
        this.profileApi.getProfileById(userId.toString()).subscribe((data: any) => {
          this.profile = data;
        });
      }
    });
    /*this.profileApi.getCurrentProfile().subscribe((data: Profile) => {
      this.profile = data;
    });*/
  }

  navigateToPrograms(){
    this.router.navigate(['profile/programs']).then();
  }

  navigateToPremium(){
    this.router.navigate(['profile/premium']).then();
  }

  navigateToRenew() {
    this.router.navigate(['subscriptions']).then();
  }

  navigateToHome() {
    this.router.navigate(['home']).then();
  }
}
