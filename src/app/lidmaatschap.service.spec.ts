import { TestBed } from '@angular/core/testing';

import { LidmaatschapService } from './lidmaatschap.service';

describe('LidmaatschapService', () => {
  let service: LidmaatschapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LidmaatschapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
