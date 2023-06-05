import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Team} from "./team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team!: Team;

  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Team[]>(
      'http://localhost:8080/team');
  }
  save(team: Team) {
    return this.http.post(
      'http://localhost:8080/team', team);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/team/' + id);
  }

  update(selectedTeam: Team) {
    return this.http.put(
      'http://localhost:8080/team', this.team);
  }
}
