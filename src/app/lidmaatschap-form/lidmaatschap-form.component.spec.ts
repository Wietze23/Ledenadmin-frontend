import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidmaatschapFormComponent } from './lidmaatschap-form.component';

describe('LidmaatschapFormComponent', () => {
  let component: LidmaatschapFormComponent;
  let fixture: ComponentFixture<LidmaatschapFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidmaatschapFormComponent]
    });
    fixture = TestBed.createComponent(LidmaatschapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
