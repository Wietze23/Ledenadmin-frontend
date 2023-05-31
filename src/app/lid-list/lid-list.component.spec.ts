import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidListComponent } from './lid-list.component';

describe('LidListComponent', () => {
  let component: LidListComponent;
  let fixture: ComponentFixture<LidListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidListComponent]
    });
    fixture = TestBed.createComponent(LidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
