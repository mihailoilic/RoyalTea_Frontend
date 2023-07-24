import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/components/admin-posts/admin-posts.component';
import { SharedModule } from '../shared/shared.module';
import { AdminPostFormComponent } from './admin/components/admin-posts/admin-post-form/admin-post-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminProductsFormComponent } from './admin/components/admin-products/admin-products-form/admin-products-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminPostsComponent,
    AdminPostFormComponent,
    AdminProductsComponent,
    AdminProductsFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class AdminModule { }
