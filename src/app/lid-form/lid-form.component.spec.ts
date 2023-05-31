import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidFormComponent } from './lid-form.component';

describe('LidFormComponent', () => {
  let component: LidFormComponent;
  let fixture: ComponentFixture<LidFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidFormComponent]
    });
    fixture = TestBed.createComponent(LidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
