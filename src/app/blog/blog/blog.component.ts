import { Component, ElementRef, OnInit } from '@angular/core';
import { BlogPaginationService } from './services/pagination/blog-pagination.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private paginationService: BlogPaginationService,
    private thisElement: ElementRef
    ) { }

  ngOnInit(): void {
    this.paginationService.scrollElement = this.thisElement;
  }

}
