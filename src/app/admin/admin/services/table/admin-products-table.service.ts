import { CurrencyPipe, DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { IProductPrice } from 'src/app/shared/interfaces/i-product';
import { BaseTableService } from 'src/app/shared/services/common-table/base-table.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { ProductsApiService } from 'src/app/shared/services/products/products-api.service';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsTableService extends BaseTableService {

  component: AdminProductsComponent;

  constructor(
    private productsApi: ProductsApiService,
    private currencyService: CurrencyService,
    private router: Router
  ) { 
    super();
  }

  getAll(): Observable<any> {
    return this.productsApi.getAll().pipe(
      map(x => x.map((p: any) => {
        p.image = {
          src: IMAGE_PATHS.PRODUCTS_DIR + p.image,
          alt: p.title
        };
        return p;
      }).sort((a,b) => a.createdAt > b.createdAt ? -1 : 1)
    ));
  }

  public columns: IColumn[] = [
    {
      index: "image",
      label: "Image",
      type: ColumnType.Image
    },
    {
      index: "title",
      label: "Title"
    },
    {
      index: "category",
      label: "Category",
      type: ColumnType.Custom,
      method: (el: any) => el.category.name
    },
    {
      index: "createdAt",
      label: "Created At",
      type: ColumnType.Custom,
      method: (el: any) => (new DatePipe("en_US").transform(el.createdAt))
    },
    {
      index: "price",
      label: "Price",
      type: ColumnType.Custom,
      method: (el: any) => this.currencyPipe(this.getPrice(el.prices))
    },
    {
      index: "view",
      label: "View",
      type: ColumnType.Button,
      method: (el: any) => this.router.navigateByUrl("/shop/" + el.id)
    },
    {
      index: "edit",
      label: "Edit",
      type: ColumnType.Button,
      method: (el: any) => this.component.openProductForm(el)
    },
    {
      index: "remove",
      label: "Remove",
      type: ColumnType.Button,
      method: (el: any) => {
        Spinner.show();
        this.productsApi.delete(el.id).subscribe({
          next: data => {
            Spinner.hide();
            this.commonTableComponent.loadData();
          },
          error: err => {
            Spinner.hide();
            console.log(err);
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

}
