import { Injectable } from '@angular/core';
import { BasePaginationService } from 'src/app/shared/services/pagination/base-pagination.service';

@Injectable({
  providedIn: 'root'
})
export class ShopPaginationService extends BasePaginationService {

  itemsPerPage: number = 6;

  constructor() { 
    super();
  }
}
