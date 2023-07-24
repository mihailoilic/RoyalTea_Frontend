import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { ICartItem } from 'src/app/shared/interfaces/i-cart-item';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { IProductPrice } from 'src/app/shared/interfaces/i-product';
import { CartApiService } from 'src/app/shared/services/cart/cart-api.service';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { BaseTableService } from 'src/app/shared/services/common-table/base-table.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';

@Injectable({
  providedIn: 'root'
})
export class CartTableService extends BaseTableService {

  constructor(
    private currencyService: CurrencyService,
    private cartService: CartService,
    private cartApi: CartApiService
    ) { 
    super();
  }

  public getAll(): Observable<any> { 

    return this.cartService.getCartItems();

  };

  protected columns: IColumn[] = [
    {
      index: "image",
      label: "Image",
      type: ColumnType.Image
    },
    {
      index: "title",
      label: "Product Name",
      type: ColumnType.Default
    },
    {
      index: "unitPrice",
      label: "Unit Price",
      type: ColumnType.Custom,
      method: (element: any) => this.currencyPipe(this.getPrice(element.product.prices))
    },
    {
      index: "quantity",
      label: "Quantity",
      type: ColumnType.InputNumber,
      method: (element: any, qty: number) => {
        this.cartService.addItem(element.product, qty, true, () => this.commonTableComponent.loadData());
      }
    },
    {
      index: "subtotalPrice",
      label: "Subtotal",
      type: ColumnType.Custom,
      method: (element: any) => {
        let price: IProductPrice = Object.create(this.getPrice(element.product.prices));
        price.value *= element.quantity;
        return this.currencyPipe(price);
      }
    },
    {
      index: "remove",
      label: "Remove",
      type: ColumnType.Button,
      method: (element: any) => {
        
        Spinner.show();
        this.cartApi.delete(element.product.id).subscribe({
          next: data => {
            this.cartService.readCart();
            this.commonTableComponent.loadData();
            Spinner.hide();
          },
          error: err => {
            console.log(err)
            Spinner.hide();
          }
        });
      }
    }
  ];

  getPrice(prices: IProductPrice[]): IProductPrice {
    return this.currencyService.getPrice(prices);
  }

  currencyPipe(price: IProductPrice): string {
    return (new CurrencyPipe("en_US", "USD")).transform(price.value, price.currencyIso);
  }

  getCartTotal(): number {
    return this.commonTableComponent.dataSource.data.reduce((total, element) => {
      let price: IProductPrice = Object.create(this.getPrice(element.product.prices));
      return total + price.value * element.quantity;
    }, 0);
  }

}
