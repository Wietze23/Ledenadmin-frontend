import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidmaatschapListComponent } from './lidmaatschap-list.component';

describe('LidmaatschapListComponent', () => {
  let component: LidmaatschapListComponent;
  let fixture: ComponentFixture<LidmaatschapListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidmaatschapListComponent]
    });
    fixture = TestBed.createComponent(LidmaatschapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
