import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GymsApiService {

  baseUrlN = 'https://my-json-server.typicode.com/notfakeangel26/gympal';

  constructor(private http: HttpClient) { }

  getNutritionists(){
    return this.http.get(`${this.baseUrlN}/nutritionists`);
  }

  getNutritionistsById(nutritionistsId: string){
    return this.http.get(`${this.baseUrlN}/nutritionists?id=${nutritionistsId}`);
  }

}
