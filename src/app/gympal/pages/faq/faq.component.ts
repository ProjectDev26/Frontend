import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  constructor(private router: Router) {
  }

  navigateToComplains(){
    this.router.navigate(['complains-doubts']).then();
  }
}
