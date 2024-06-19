import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-testimonials-write',
  templateUrl: './testimonials-write.component.html',
  styleUrl: './testimonials-write.component.css'
})
export class TestimonialsWriteComponent {
  constructor(private router: Router) {
  }

  navigateToTestimonials(){
    this.router.navigate(['/testimonials']).then();
  }
}
