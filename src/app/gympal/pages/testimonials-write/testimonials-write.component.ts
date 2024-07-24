import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Profile} from "../../model/profile.entity";
import {ProfileApiService} from "../../services/profile-api.service";
import {AuthenticationService} from "../../../iam/services/authentication.service";
import {TestimonialsApiService} from "../../services/testimonials-api.service";
import {Testimonial} from "../../model/testimonial.entity";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-write',
  templateUrl: './testimonials-write.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './testimonials-write.component.css'
})
export class TestimonialsWriteComponent implements OnInit{

  testimonialData: Testimonial;
  testimonials: Array<Testimonial> = [];
  profile: Profile = new Profile();
  testimonialForm: FormGroup;

  constructor(private router: Router, private profileApi: ProfileApiService,
              private testimonialApi: TestimonialsApiService, private authService: AuthenticationService,
              private fb: FormBuilder) {

    this.testimonialData = {} as Testimonial;
    this.testimonialForm = this.fb.group({
      //firstName: [''],
      //lastName: [''],
      testimonial: ['']
    });
  }

  ngOnInit(): void {
    this.authService.currentUserId.subscribe(userId => {
      if (userId) {
        this.profileApi.getById(userId.toString()).subscribe((data: any) => {
          this.profile = data;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.testimonialForm.valid) {
      const newTestimonial: Testimonial = {
        ...this.testimonialForm.value,
        firstName: this.profile.firstName,
        lastName: this.profile.lastName
      }

      this.testimonialApi.create(newTestimonial).subscribe((testimonial) => {
        this.testimonials.push(testimonial);
      });
    }
    this.navigateToTestimonials();
  }

  navigateToTestimonials(){
    this.router.navigate(['/testimonials']).then();
  }
}
