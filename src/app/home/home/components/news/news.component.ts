import { Component, OnInit } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IBlogPost } from 'src/app/shared/interfaces/i-blog-post';
import { BlogApiService } from 'src/app/shared/services/blog/blog-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts: IBlogPost[] = [];

  constructor(private blogApiService: BlogApiService) { }

  ngOnInit(): void {

    Spinner.show();

    this.blogApiService.getAll().subscribe({
      next: data => {
        
        // Take 3 latest 
        data = data.sort((a,b) => a.date > b.date ? -1 : 1).slice(0, 3);

        this.posts = data;

        Spinner.hide();

      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    });
  }

}
