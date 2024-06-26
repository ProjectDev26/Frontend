import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GymsApiService {
  //http://localhost:8080/api/v1/coach-professional/2
  baseUrl = 'http://localhost:8080/api/v1';
  baseUrlN = 'https://my-json-server.typicode.com/notfakeangel26/gympal';

  constructor(private http: HttpClient) { }

  getCoaches(){
    return this.http.get(`${this.baseUrl}/coach-professional`);
  }

  getCoachById(coachId: string){
    return this.http.get(`${this.baseUrl}/coach-professional/${coachId}`);
  }

  getNutritionists(){
    return this.http.get(`${this.baseUrlN}/nutritionists`);
  }

  getNutritionistsById(nutritionistsId: string){
    return this.http.get(`${this.baseUrlN}/nutritionists?id=${nutritionistsId}`);
  }

}
