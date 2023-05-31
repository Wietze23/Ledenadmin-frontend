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
  @Input() lidList!: LidListComponent;
  constructor(public lidService: LidService) { }
  ngOnInit(): void {}
  add() {
    this.lidService.save(this.lid).subscribe(
      () => this.lidList.getAll()
    )
  }

}
