import {Component, OnInit} from '@angular/core';
import {Profile} from "./gympal/model/profile.entity";
import {AuthenticationService} from "./iam/services/authentication.service";
import {ProfileApiService} from "./gympal/services/profile-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'gymPal';

  currentProfile: Profile | null = null;

  constructor(
    private authService: AuthenticationService,
    private profileApiService: ProfileApiService
  ) {}

  ngOnInit(): void {
    this.authService.currentUserId.subscribe(userId => {
      if (userId) {
        this.profileApiService.getProfileById(userId.toString()).subscribe(profile => {
          this.currentProfile = profile;
        });
      }
    });
  }
}
