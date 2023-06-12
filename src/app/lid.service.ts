import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lid} from "./lid";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LidService {
  lid!: Lid;
  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Lid[]>(
      'http://localhost:8080/lid');
  }
  getDropdownValuesLid(): Observable<Lid[]> {
    return this.http.get<Lid[]>('http://localhost:8080/lid');
  }

  save(lid: Lid) {
    return this.http.post(
      'http://localhost:8080/lid', lid);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/lid/' + id);
  }
  update(lid: Lid) {
    return this.http.put(
      'http://localhost:8080/lid', lid);
  }
}
