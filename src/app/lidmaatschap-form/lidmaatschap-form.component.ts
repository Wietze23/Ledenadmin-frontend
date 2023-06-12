import {Component, Input, OnInit} from '@angular/core';
import {TeamService} from "../team.service";
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";
import {LidmaatschapListComponent} from "../lidmaatschap-list/lidmaatschap-list.component";
import {Team} from "../team";
import {LidService} from "../lid.service";
import {Lid} from "../lid";


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
//  teams: string[]= ['Aspiranten', 'Senioren'];
  dropdownValues!: Team[];
  dropdownValuesLid!: Lid[];

  constructor(public lidmaatschapService: LidmaatschapService, public teamService: TeamService, public lidService: LidService) {
  }

  ngOnInit(): void {
    this.teamService.getDropdownValues().subscribe(values => {
      console.log("team.." + values.map(tm=>tm.categorie))
      this.dropdownValues = values;
    });
    this.lidService.getDropdownValuesLid().subscribe(values => {
      console.log("lid: " + values.map(ld =>ld.voornaam))
      this.dropdownValuesLid = values;
    });
  }


  add() {
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
      () => this.lidmaatschapList.getAll()
    )
  }

}
