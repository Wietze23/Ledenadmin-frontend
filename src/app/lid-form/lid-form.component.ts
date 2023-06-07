import {Component, Input, OnInit} from '@angular/core';
import {Lid} from "../lid";
import {LidListComponent} from "../lid-list/lid-list.component";
import {LidService} from "../lid.service";

@Component({
  selector: 'app-lid-form',
  templateUrl: './lid-form.component.html',
  styleUrls: ['./lid-form.component.css']
})
export class LidFormComponent implements OnInit{
  lid = new Lid();
  message: boolean = false;
  @Input() lidList!: LidListComponent;
  selectedGeslacht!: string;
  geslacht: string[]= ['Man', 'Vrouw'];


  constructor(public lidService: LidService) { }
  ngOnInit(): void {}
  add() {
    this.lid.geslacht=this.selectedGeslacht
    this.lidService.save(this.lid).subscribe(
      () => this.lidList.getAll()
    )
      this.message = true;
  }
  removeMessage() {
    this.message = false;
  }

  removeMessageClearFields() {
    this.message = true;
    this.lid.naam = '';
    this.lid.voornaam = '';
    this.lid.geboortedatum = '';
    this.selectedGeslacht = '';
  }
}
