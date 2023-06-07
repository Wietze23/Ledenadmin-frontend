import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../team";
import {TeamListComponent} from "../team-list/team-list.component";
import {TeamService} from "../team.service";
import {Lidmaatschap} from "../lidmaatschap";

@Component({
  selector: 'app-lidmaatschap-form',
  templateUrl: './lidmaatschap-form.component.html',
  styleUrls: ['./lidmaatschap-form.component.css']
})
export class LidmaatschapFormComponent implements OnInit{
  lidmaatschap = new Lidmaatschap();
  @Input() teamList!: TeamListComponent;
  constructor(public lidmaatschapService: lidmaatschapService) { }
  ngOnInit(): void {}
  add() {
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
      () => this.lidmaatschapList.getAll()
    )
  }


}
