import {Component, OnInit} from '@angular/core';
import {Lidmaatschap} from "../lidmaatschap";
import {LidmaatschapService} from "../lidmaatschap.service";


@Component({
  selector: 'app-lidmaatschap-list',
  templateUrl: './lidmaatschap-list.component.html',
  styleUrls: ['./lidmaatschap-list.component.css']
})
export class LidmaatschapListComponent implements OnInit{
  lidmaatschap: Lidmaatschap[] = [];
  selectedLidmaatschap!: Lidmaatschap;

  ngOnInit(): void { this.getAll(); }
  constructor(public lidmaatschapService: LidmaatschapService) {}
  getAll() {
    this.lidmaatschapService.getAll().subscribe(
      data => this.lidmaatschap = data
    )}
  delete(id: number) {
    this.lidmaatschapService.delete(id).subscribe(
      () => this.getAll()
    )}

  onSelect(lidmaatschap: Lidmaatschap) {
    this.selectedLidmaatschap = lidmaatschap
  }

  update(id: number) {

    this.lidmaatschapService.update(this.selectedLidmaatschap).subscribe(
      () => this.getAll()
    )
  }
}
