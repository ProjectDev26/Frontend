import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = `/resources`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public http: HttpClient) {}

  private resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  getAll() {
    return this.http.get<T>(this.resourcePath(), this.httpOptions);
  }

  create(item: any) {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions);
  }

  getById(id: string) {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions);
  }
}
