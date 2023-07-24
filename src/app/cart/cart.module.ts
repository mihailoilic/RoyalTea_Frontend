import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './cart/components/checkout-form/checkout-form.component';
import { ThankYouComponent } from './cart/components/thank-you/thank-you.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutFormComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
