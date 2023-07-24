import { TestBed } from '@angular/core/testing';

import { BaseFormService } from './base-form.service';

describe('BaseFormServiceService', () => {
  let service: BaseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
