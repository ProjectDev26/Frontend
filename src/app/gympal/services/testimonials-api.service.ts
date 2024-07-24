import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Testimonial} from "../model/testimonial.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class TestimonialsApiService extends BaseService<Testimonial>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEdndpoint = '/testimonials';
  }

}
