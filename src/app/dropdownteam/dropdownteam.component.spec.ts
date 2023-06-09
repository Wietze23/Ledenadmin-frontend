import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownteamComponent } from './dropdownteam.component';

describe('DropdownteamComponent', () => {
  let component: DropdownteamComponent;
  let fixture: ComponentFixture<DropdownteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownteamComponent]
    });
    fixture = TestBed.createComponent(DropdownteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
