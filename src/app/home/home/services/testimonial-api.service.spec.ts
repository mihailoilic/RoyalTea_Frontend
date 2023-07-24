import { TestBed } from '@angular/core/testing';

import { TestimonialApiService } from './testimonial-api.service';

describe('TestimonialApiService', () => {
  let service: TestimonialApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
