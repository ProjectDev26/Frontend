import { Component } from '@angular/core';
import {GymsApiService} from "../../services/gyms-api.service";
import {ActivatedRoute} from "@angular/router";
import {Nutritionist} from "../../model/nutritionist.entity";
import {MatCard} from "@angular/material/card";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-detail-nutritionist',
  templateUrl: './detail-nutritionist.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatAnchor
  ],
  styleUrl: './detail-nutritionist.component.css'
})
export class DetailNutritionistComponent {

  nutritionist: Nutritionist;
  nutritionistId = '';

  constructor(private gymApi: GymsApiService, private route: ActivatedRoute) {
    this.nutritionist = new Nutritionist();
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.nutritionistId = params['id'];
    });

    this.gymApi.getNutritionistsById(this.nutritionistId).subscribe((data: any)=>{
      this.nutritionist = data[0];
    });
  }

}
