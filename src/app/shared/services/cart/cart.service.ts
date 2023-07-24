import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { AuthService } from '../../auth/auth.service';
import { Spinner } from '../../classes/Spinner';
import { ICartItem } from '../../interfaces/i-cart-item';
import { IProduct } from '../../interfaces/i-product';
import { CartApiService } from './cart-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ICartItem[] = [];

  constructor(
    private cartApi: CartApiService,
    private authService: AuthService,
    private router: Router
    ) { 
    
    if(this.authService.token)
      this.readCart();
  }

  readCart(): void {
    this.getCartItems().subscribe({
      next: data => {
        this.cart = data;
      },
      error: err => console.log(err)
    });
  }

  getCartItems(): Observable<any> {
    return this.cartApi.getAll().pipe(map(o => o.map((x: ICartItem) => {
      return {
        product: x.product,
        image: {
          alt: x.product.title,
          src: IMAGE_PATHS.PRODUCTS_DIR + x.product.image
        },
        title: x.product.title,
        quantity: x.quantity,
      }
    })));
  }

  addItem(product: IProduct, quantity: number, override = false, callback: Function = null): void {

    if(!this.authService.token) {
      this.router.navigateByUrl("/auth/login");
      return;
    }

    let itemObj = {
      productId: product.id,
      quantity: quantity
    };

    Spinner.show();

    if(override)
    {
      this.cartApi.update(product.id, itemObj).subscribe({
        next: data => {
          this.readCart()
          if(callback)
            callback();
            
          Spinner.hide();
        },
        error: err => {
          console.log(err)
          Spinner.hide();
        }
      });
    }
    else 
    {
      this.cartApi.create(itemObj).subscribe({
        next: data => {
          this.readCart()
          if(callback)
            callback();

          Spinner.hide();
        },
        error: err => {
          console.log(err)
          Spinner.hide();
        }
      });
    }
  }
  
}
