import { TestBed } from '@angular/core/testing';

import { AdminProductsTableService } from './admin-products-table.service';

describe('AdminProductsTableService', () => {
  let service: AdminProductsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
