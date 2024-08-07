import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService extends BaseService<Profile>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEdndpoint = '/profiles';
  }
}
