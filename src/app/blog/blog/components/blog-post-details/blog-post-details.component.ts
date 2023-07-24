import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IBlogPost } from 'src/app/shared/interfaces/i-blog-post';
import { BlogApiService } from 'src/app/shared/services/blog/blog-api.service';

@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss']
})
export class BlogPostDetailsComponent implements OnInit {

  isReady: boolean = false;

  imgDir: string = IMAGE_PATHS.BLOG_DIR;
  post: IBlogPost;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private blogApiService: BlogApiService
    ) { }

  ngOnInit(): void {

    Spinner.show();

    let id = this.route.snapshot.paramMap.get("id");

    this.blogApiService.get(id).subscribe({
      next: data => {
        if(!data){
          this.router.navigateByUrl("/404");
          return;
        }
        this.post = data;
        this.isReady = true;
        this.title.setTitle(this.title.getTitle().replace("Blog Post", this.post.title));
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    })
  }

}
