import { Component, Input, OnInit } from '@angular/core';
import { BasePaginationService } from '../../services/pagination/base-pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() paginationService: BasePaginationService;

  constructor() { }

  ngOnInit(): void {
  }

}
