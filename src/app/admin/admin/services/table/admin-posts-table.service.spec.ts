import { TestBed } from '@angular/core/testing';

import { AdminPostsTableService } from './admin-posts-table.service';

describe('AdminPostsTableService', () => {
  let service: AdminPostsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPostsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
