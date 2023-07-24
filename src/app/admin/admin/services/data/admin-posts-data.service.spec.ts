import { TestBed } from '@angular/core/testing';

import { AdminPostsDataService } from './admin-posts-data.service';

describe('AdminPostsDataService', () => {
  let service: AdminPostsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPostsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
