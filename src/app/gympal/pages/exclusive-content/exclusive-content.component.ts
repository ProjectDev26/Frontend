import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-exclusive-content',
  templateUrl: './exclusive-content.component.html',
  styleUrl: './exclusive-content.component.css'
})
export class ExclusiveContentComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['profile/premium']).then();
  }
}
