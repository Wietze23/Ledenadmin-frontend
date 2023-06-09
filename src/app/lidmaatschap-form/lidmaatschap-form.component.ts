import {Component, Input, OnInit} from '@angular/core';
import {TeamListComponent} from "../team-list/team-list.component";
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";
import {LidmaatschapListComponent} from "../lidmaatschap-list/lidmaatschap-list.component";
import {LidService} from "../lid.service";


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


  constructor(public lidmaatschapService: LidmaatschapService) { }
  ngOnInit(): void {
//    LidService.getAll().subscribe(leden => {
//      this.leden = leden;
//    });
  }

  add() {
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
      () => this.lidmaatschapList.getAll()
    )
  }


  protected readonly onselect = onselect;

}
