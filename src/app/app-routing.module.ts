import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './layout/main-layout/components/not-found/not-found.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./home/home.module").then(x => x.HomeModule),
      },
      {
        path: "shop",
        loadChildren: () => import("./shop/shop.module").then(x => x.ShopModule)
      },
      {
        path: "cart",
        loadChildren: () => import("./cart/cart.module").then(x => x.CartModule)
      },
      {
        path: "blog",
        loadChildren: () => import("./blog/blog.module").then(x => x.BlogModule)
      },
      {
        path: "contact",
        loadChildren: () => import("./contact/contact.module").then(x => x.ContactModule)

      },
      {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)
      },
      {
        path: "admin",
        loadChildren: () => import("./admin/admin.module").then(x => AdminModule)
      },
      {
        path: "author",
        component: AuthorComponent
      },
      {
        path: "**",
        redirectTo: "/404"
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: {title: "Page Not Found"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
