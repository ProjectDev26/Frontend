import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GymsApiService {

  apikey = '';
  baseUrl = '';

  constructor(private http: HttpClient) { }

  getCoaches(){
    //return this.http.get(`${this.baseUrl}/coaches?apikey=${this.apikey}`);
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getCoachById(coachId: string){
    return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${coachId}`);
  }

}
