import {Component, Input, OnInit} from '@angular/core';
import {TeamService} from "../team.service";
import {TeamListComponent} from "../team-list/team-list.component";
import {Team} from "../team";

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit{
  team = new Team();
  @Input() teamList!: TeamListComponent;
  constructor(public teamService: TeamService) { }
  ngOnInit(): void {}
  add() {
    this.teamService.save(this.team).subscribe(
      () => this.teamList.getAll()
    )
  }

}
