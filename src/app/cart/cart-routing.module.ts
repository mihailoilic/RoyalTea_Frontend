import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ThankYouComponent } from './cart/components/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CartComponent,
    data: {title: "Cart"},
  },
  {
    path: "thank-you",
    data: { title: "Thank You" },
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
