import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BannersComponent } from './home/components/banners/banners.component';
import { BannerComponent } from './home/components/banners/components/banner/banner.component';
import { FeaturedProductsComponent } from './home/components/featured-products/featured-products.component';
import { NewsComponent } from './home/components/news/news.component';
import { SliderComponent } from './home/components/slider/slider.component';
import { TestimonialComponent } from './home/components/testimonials/components/testimonial/testimonial.component';
import { TestimonialsComponent } from './home/components/testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    TestimonialComponent,
    BannersComponent,
    BannerComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
