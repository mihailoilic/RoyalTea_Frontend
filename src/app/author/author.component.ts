import { Component, OnInit } from '@angular/core';
import { IMAGE_PATHS } from '../constants/image-paths';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  image: string = IMAGE_PATHS.AUTHOR;

  constructor() { }

  ngOnInit(): void {
  }

}
