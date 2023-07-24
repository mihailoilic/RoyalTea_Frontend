import { Component, Input, OnInit } from '@angular/core';
import { BasePaginationService } from '../../services/pagination/base-pagination.service';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss']
})
export class ProductCountComponent implements OnInit {

  @Input() paginationService: BasePaginationService;

  constructor() { }

  ngOnInit(): void {
  }

}
