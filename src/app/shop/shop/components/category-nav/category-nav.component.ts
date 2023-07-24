import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/i-category';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit {

  @Input() categories: ICategory[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
