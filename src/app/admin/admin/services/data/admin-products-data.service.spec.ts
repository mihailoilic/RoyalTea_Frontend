import { TestBed } from '@angular/core/testing';

import { AdminProductsDataService } from './admin-products-data.service';

describe('AdminProductsDataService', () => {
  let service: AdminProductsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
