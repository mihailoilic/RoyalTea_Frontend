import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AllBlogPostsComponent } from './blog/components/all-blog-posts/all-blog-posts.component';
import { BlogPostDetailsComponent } from './blog/components/blog-post-details/blog-post-details.component';

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "sort/newest"
      },
      {
        path: ":filter/:value",
        component: AllBlogPostsComponent,
        data: {title: "Blog"}
      },
      {
        path: ":id",
        component: BlogPostDetailsComponent,
        data: {title: "Blog Post"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
