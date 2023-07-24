import { TestBed } from '@angular/core/testing';

import { FiltersFormService } from './filters-form.service';

describe('FiltersService', () => {
  let service: FiltersFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
