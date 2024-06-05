import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  standalone: true,
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  constructor(private router: Router) {
  }

  navigateToTestimonialsWrite(){
    this.router.navigate(['testimonials/write']).then();
  }
}
