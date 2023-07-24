import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IBlogPost } from 'src/app/shared/interfaces/i-blog-post';
import { BlogApiService } from 'src/app/shared/services/blog/blog-api.service';
import { BlogComponent } from '../../blog.component';
import { BlogPaginationService } from '../../services/pagination/blog-pagination.service';

@Component({
  selector: 'app-all-blog-posts',
  templateUrl: './all-blog-posts.component.html',
  styleUrls: ['./all-blog-posts.component.scss']
})
export class AllBlogPostsComponent implements OnInit {


  posts: IBlogPost[] = [];

  constructor(
    private blogService: BlogApiService,
    private route: ActivatedRoute,
    public paginationService: BlogPaginationService
    ) { }

  ngOnInit(): void {

    Spinner.show();

    this.blogService.getAll().subscribe({
      next: data => {
        this.posts = data;
        this.sortPosts();
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    })

    this.route.params.subscribe(() => this.sortPosts());
  }

  sortPosts(): void {
    let sort = this.route.snapshot.paramMap.get("value");
    switch(sort) {
      case "newest":
        this.posts.sort((a,b) => a.date > b.date ? -1 : 1); break;
      case "popular":
        this.posts.sort((a,b) => b.views - a.views);
    }
    this.paginationService.setData(this.posts);
  }

}
