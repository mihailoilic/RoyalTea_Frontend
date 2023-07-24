import { TestBed } from '@angular/core/testing';

import { CartTableService } from './cart-table.service';

describe('CartTableService', () => {
  let service: CartTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
