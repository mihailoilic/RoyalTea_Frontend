import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './shop/components/filters/filters.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryNavComponent } from './shop/components/category-nav/category-nav.component';


@NgModule({
  declarations: [
    ShopComponent,
    FiltersComponent,
    ProductDetailsComponent,
    CategoryNavComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
