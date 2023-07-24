import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/components/header/header.component';
import { FooterComponent } from './main-layout/components/footer/footer.component';
import { NavComponent } from './main-layout/components/header/components/nav/nav.component';
import { UserControlsComponent } from './main-layout/components/header/components/user-controls/user-controls.component';
import { LogoComponent } from './main-layout/components/header/components/logo/logo.component';
import { MobileNavComponent } from './main-layout/components/header/components/mobile-nav/mobile-nav.component';
import { CurrencyComponent } from './main-layout/components/header/components/user-controls/currency/currency.component';
import { CartButtonComponent } from './main-layout/components/header/components/user-controls/cart-button/cart-button.component';
import { SpinnerComponent } from './main-layout/components/spinner/spinner.component';
import { NotFoundComponent } from './main-layout/components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { UserLoginComponent } from './main-layout/components/header/components/user-controls/user-login/user-login.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UserControlsComponent,
    LogoComponent,
    MobileNavComponent,
    CurrencyComponent,
    CartButtonComponent,
    SpinnerComponent,
    NotFoundComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
