import {Component, OnInit} from '@angular/core';
import {Coaches} from "../../../gympal/model/coaches.entity";
import {GymsApiService} from "../../../gympal/services/gyms-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CoachesService} from "../../services/coaches.service";

@Component({
  selector: 'app-detail-coach',
  templateUrl: './detail-coach.component.html',
  styleUrl: './detail-coach.component.css'
})
export class DetailCoachComponent implements OnInit{

  coach: Coaches;
  coachId = '';

  constructor(private coachDataService: CoachesService, private route: ActivatedRoute, private router: Router) {
    this.coach = new Coaches();
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.coachId = params['id'];
    });

    this.coachDataService.getById(this.coachId).subscribe((data: any)=>{
      this.coach = data;
    });
  }

  navigateToContact() {
    this.router.navigate(['contact-form']).then();
  }
}
