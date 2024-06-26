import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile.entity";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = 'https://flex-pal-backend-d7986c9ae6c4.herokuapp.com/api/v1/profiles'

  constructor(private http: HttpClient) { }

  getProfileById(profileId: string) {
    return this.http.get<Profile>(`${this.baseUrl}/${profileId}`);
  }


}
