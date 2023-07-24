import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CartDataService } from './services/data/cart-data.service';
import { CartTableService } from './services/table/cart-table.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    public cartService: CartService,
    public cartDataService: CartDataService,
    public cartTableService: CartTableService,
    public currencyService: CurrencyService) { }

  ngOnInit(): void {

  }

  checkout(): void {
    this.matDialog.open(CheckoutFormComponent, {
      width: "auto",
      data: {total: this.cartTableService.getCartTotal()}
    }).afterClosed().subscribe(data => {
      if(data){
        this.cartService.readCart();
        this.router.navigateByUrl("/cart/thank-you");
      }
    });
  }

}
