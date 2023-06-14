import {Component, Input, OnInit} from '@angular/core';
import {TeamService} from "../team.service";
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";
import {LidmaatschapListComponent} from "../lidmaatschap-list/lidmaatschap-list.component";
import {Team} from "../team";
import {LidService} from "../lid.service";
import {Lid} from "../lid";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-lidmaatschap-form',
  templateUrl: './lidmaatschap-form.component.html',
  styleUrls: ['./lidmaatschap-form.component.css']


})

export class LidmaatschapFormComponent implements OnInit{

  lidmaatschap = new Lidmaatschap();
  @Input() lidmaatschapList!: LidmaatschapListComponent;
  selectedLid!: number;
  selectedRol!: string;
  rollen: string[]= ['Speler', 'Trainer'];
  selectedTeam!: number;
  dropdownValues!: Team[];
  dropdownValuesLid!: Lid[];
  message: boolean = false;
  errormelding: boolean =false;

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
    this.lidmaatschap.lid.id=this.selectedLid;
    this.lidmaatschap.team.id=this.selectedTeam;
    this.lidmaatschap.name=this.selectedRol;
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
        () => {
     //     this.lidmaatschapList.getAll()
          this.message = true;
          this.errormelding = false;
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            // Bad Request, handle the error message
            console.log(error.error)
            this.message = false;
            this.errormelding = true;
          } else {
            // Other error, handle accordingly
            console.error('An error occurred:', error.error)
            this.message = false;
            this.errormelding = true;
          }
        }

    )

  }

  removeMessageClearFields() {
    this.message = false;
    this.lidmaatschap.name = '';
    this.selectedRol = '';
    this.selectedTeam = 0;
    this.selectedLid = 0;
  }

}
