import {Component, OnInit} from '@angular/core';

import {LidService} from "../lid.service";
import {Lid} from "../lid";

@Component({
  selector: 'app-lid-list',
  templateUrl: './lid-list.component.html',
  styleUrls: ['./lid-list.component.css']
})
export class LidListComponent implements OnInit {
  lid: Lid[] = [];
  selectedLid!: Lid;

  ngOnInit(): void { this.getAll(); }
  constructor(public lidService: LidService) {}
  getAll() {
    this.lidService.getAll().subscribe(
      data => this.lid = data
    )}
  delete(id: number) {
    this.lidService.delete(id).subscribe(
      () => this.getAll()
    )}

  onSelect(lid: Lid) {
    this.selectedLid = lid
  }
}

