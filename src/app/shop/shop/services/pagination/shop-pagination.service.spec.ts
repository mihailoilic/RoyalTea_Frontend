import { TestBed } from '@angular/core/testing';

import { ShopPaginationService } from './shop-pagination.service';

describe('ShopPaginationService', () => {
  let service: ShopPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
