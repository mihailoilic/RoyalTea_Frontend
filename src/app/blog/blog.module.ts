import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogNavComponent } from './blog/components/blog-nav/blog-nav.component';
import { AllBlogPostsComponent } from './blog/components/all-blog-posts/all-blog-posts.component';
import { BlogPostDetailsComponent } from './blog/components/blog-post-details/blog-post-details.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogNavComponent,
    AllBlogPostsComponent,
    BlogPostDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
