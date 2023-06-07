import {Component, Input, OnInit} from '@angular/core';
import {TeamListComponent} from "../team-list/team-list.component";
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";
import {LidmaatschapListComponent} from "../lidmaatschap-list/lidmaatschap-list.component";

@Component({
  selector: 'app-lidmaatschap-form',
  templateUrl: './lidmaatschap-form.component.html',
  styleUrls: ['./lidmaatschap-form.component.css']
})
export class LidmaatschapFormComponent implements OnInit{
  lidmaatschap = new Lidmaatschap();
  @Input() lidmaatschapList!: LidmaatschapListComponent;

  constructor(public lidmaatschapService: LidmaatschapService) { }
  ngOnInit(): void {}

  add() {
    this.lidmaatschapService.save(this.lidmaatschap).subscribe(
      () => this.lidmaatschapList.getAll()
    )
  }


}
