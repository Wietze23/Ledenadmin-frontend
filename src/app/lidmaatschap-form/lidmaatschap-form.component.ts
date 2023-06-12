import {Component, Input, OnInit} from '@angular/core';
import {TeamService} from "../team.service";
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";
import {LidmaatschapListComponent} from "../lidmaatschap-list/lidmaatschap-list.component";
import {Team} from "../team";


@Component({
  selector: 'app-lidmaatschap-form',
  templateUrl: './lidmaatschap-form.component.html',
  styleUrls: ['./lidmaatschap-form.component.css']


})

export class LidmaatschapFormComponent implements OnInit{

  lidmaatschap = new Lidmaatschap();
  @Input() lidmaatschapList!: LidmaatschapListComponent;
  selectedLid!: string;
  leden: string[]= ['Lid1', 'Lid2'];
  selectedRol!: string;
  rollen: string[]= ['Speler', 'Trainer'];
  selectedTeam!: string;
  teams: string[]= ['Aspiranten', 'Senioren'];
  dropdownValues!: Team[];

  constructor(public lidmaatschapService: LidmaatschapService, public teamService: TeamService) {
  }

  ngOnInit(): void {
    this.teamService.getDropdownValues().subscribe(values => {
      console.log("team.." + values.map(tm=>tm.categorie))
      this.dropdownValues = values;
    });
  }


  add() {
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
      () => this.lidmaatschapList.getAll()
    )
  }


  protected readonly onselect = onselect;

}
