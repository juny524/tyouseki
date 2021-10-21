import { TestBed } from '@angular/core/testing';

import { ApiaccessService } from './apiaccess.service';

describe('ApiaccessService', () => {
  let service: ApiaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
