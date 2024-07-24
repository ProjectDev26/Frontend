import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Profile} from "../../model/profile.entity";
import { CommonModule } from '@angular/common';
import {Testimonial} from "../../model/testimonial.entity";
import {TestimonialsApiService} from "../../services/testimonials-api.service";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{

  profile: Profile = new Profile();
  testimonials: Array<Testimonial> = [];

  constructor(private router: Router, private testimonialService: TestimonialsApiService) {
  }

  ngOnInit(): void {
    this.getAllCoaches();
  }

  private getAllCoaches() {
    this.testimonialService.getAll().subscribe((response: any) => {
      this.testimonials = response;
    });
  }

  navigateToTestimonialsWrite(){
    this.router.navigate(['testimonials/write']).then();
  }
}
