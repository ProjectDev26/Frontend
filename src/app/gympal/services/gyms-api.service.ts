import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GymsApiService {

  baseUrl = 'https://my-json-server.typicode.com/notfakeangel26/flexpal';

  constructor(private http: HttpClient) { }

  getCoaches(){
    return this.http.get(`${this.baseUrl}/coaches`);
  }

  getCoachById(coachId: string){
    return this.http.get(`${this.baseUrl}/coaches?id=${coachId}`);
  }

}