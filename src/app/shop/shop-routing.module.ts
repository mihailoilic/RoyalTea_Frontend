import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ShopComponent,
    data: { title: "Shop" }
  },
  {
    path: "sort/:sort",
    component: ShopComponent,
    data: { title: "Shop" }
  },
  {
    path: "category/:id",
    component: ShopComponent,
    data: { title: "Shop" }
  },
  {
    path: ":id",
    component: ProductDetailsComponent,
    data: { title: "Product" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
