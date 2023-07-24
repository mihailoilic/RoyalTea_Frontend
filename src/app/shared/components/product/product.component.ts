import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { IProduct } from '../../interfaces/i-product';
import { CartService } from '../../services/cart/cart.service';
import { CurrencyService } from '../../services/currency/currency.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productImagesDir:string = IMAGE_PATHS.PRODUCTS_DIR;
  @Input() product: IProduct;

  constructor(
    public currencyService: CurrencyService,
    public cartService: CartService
    ) { }

  ngOnInit(): void {

  }

}
