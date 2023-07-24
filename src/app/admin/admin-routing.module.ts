import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/components/admin-posts/admin-posts.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "posts"
      },
      {
        path: "posts",
        component: AdminPostsComponent,
        data: { title: "Admin Posts" }
      },
      {
        path: "products",
        component: AdminProductsComponent,
        data: { title: "Admin Products" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
