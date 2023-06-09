import {Component, OnInit} from '@angular/core';
import {TeamService} from "../team.service";
import {Team} from "../team";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

  export class TeamListComponent implements OnInit {
  team: Team[] = [];
  selectedTeam!: Team;

  ngOnInit(): void { this.getAll(); }
  constructor(public teamService: TeamService) {}
  getAll() {
    console.log("team-start" )
    this.teamService.getAll().subscribe(
      data => {
        this.team = data
        console.log("team" + data)
      }
    )}
  delete(id: number) {
    this.teamService.delete(id).subscribe(
      () => this.getAll()
    )}

  onSelect(team: Team) {
    this.selectedTeam = team
  }

  update(id: number) {
    this.teamService.update(this.selectedTeam).subscribe(
      () => this.getAll()
    )
  }
}


