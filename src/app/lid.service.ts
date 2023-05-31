import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lid} from "./lid";

@Injectable({
  providedIn: 'root'
})
export class LidService {
  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Lid[]>(
      'http://localhost:8080/lid');
  }
  save(lid: Lid) {
    return this.http.post(
      'http://localhost:8080/lid', lid);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/lid/' + id);
  }
}
