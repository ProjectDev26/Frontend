import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  baseUrl = 'http://localhost:8080/api/v1/profiles'

  constructor(private http: HttpClient) { }

  getProfileById(profileId: string) {
    return this.http.get<Profile>(`${this.baseUrl}/${profileId}`);
  }


}
