import {Component, OnInit} from '@angular/core';
import {Coaches} from "../../model/coaches.entity";
import {Router} from "@angular/router";
import {CoachesService} from "../../services/coaches.service";

@Component({
  selector: 'app-list-coaches',
  templateUrl: './list-coaches.component.html',
  styleUrl: './list-coaches.component.css'
})
export class ListCoachesComponent implements OnInit{

  coaches: Array<Coaches> = [];

  constructor(private router: Router, private coachDataService: CoachesService) {
  }

  ngOnInit(){
    this.getAllCoaches();
  }

  private getAllCoaches() {
    this.coachDataService.getAll().subscribe((response: any) => {
      this.coaches = response;
    });
  }

  onCoachSelected(coach: any){
    this.router.navigate(['detail-coach', coach.id]).then();
  }


}
