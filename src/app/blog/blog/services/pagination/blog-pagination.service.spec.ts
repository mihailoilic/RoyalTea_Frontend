import { TestBed } from '@angular/core/testing';

import { BlogPaginationService } from './blog-pagination.service';

describe('BlogPaginationService', () => {
  let service: BlogPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
