import {Injectable} from '@angular/core';
import {Lidmaatschap} from "./lidmaatschap";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LidmaatschapService {
  lidmaatschap!: Lidmaatschap

  constructor(public http: HttpClient) { }


  getAll() {
    return this.http.get<Lidmaatschap[]>(
      'http://localhost:8080/lidmaatschap');
  }
  save(lidmaatschap: Lidmaatschap) {
    return this.http.post(
      'http://localhost:8080/lidmaatschap', lidmaatschap);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/lidmaatschap/' + id);
  }

  update(selectedLidmaatschap: Lidmaatschap) {
    return this.http.put(
      'http://localhost:8080/lidmaatschap', this.lidmaatschap);
  }
}
