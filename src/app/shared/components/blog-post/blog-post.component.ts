import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { IBlogPost } from '../../interfaces/i-blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() post: IBlogPost;
  imageDir: string = IMAGE_PATHS.BLOG_DIR;

  constructor() { }

  ngOnInit(): void {
  }

  
  stripHtmlTags(text: string): string {
    text = text.replace(/(&nbsp;)+/, " ");
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
