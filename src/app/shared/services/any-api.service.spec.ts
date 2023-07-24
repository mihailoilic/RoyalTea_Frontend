import { TestBed } from '@angular/core/testing';

import { AnyApiService } from './any-api.service';

describe('AnyApiService', () => {
  let service: AnyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
