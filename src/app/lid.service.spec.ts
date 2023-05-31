import { TestBed } from '@angular/core/testing';

import { LidService } from './lid.service';

describe('LidService', () => {
  let service: LidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
