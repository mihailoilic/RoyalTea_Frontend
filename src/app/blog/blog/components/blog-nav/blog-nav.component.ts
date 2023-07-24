import { Component, OnInit } from '@angular/core';
import { NAV } from 'src/app/constants/nav';

@Component({
  selector: 'app-blog-nav',
  templateUrl: './blog-nav.component.html',
  styleUrls: ['./blog-nav.component.scss']
})
export class BlogNavComponent implements OnInit {

  links: any[] = NAV.find(x => x.title.toLowerCase() == "blog").children;

  constructor() { }

  ngOnInit(): void {
  }

}
