import { TestBed } from '@angular/core/testing';

import { LunchladyApiService } from './lunchlady-api.service';

describe('LunchladyApiService', () => {
  let service: LunchladyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LunchladyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
