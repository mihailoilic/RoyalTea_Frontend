import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IProduct } from 'src/app/shared/interfaces/i-product';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { ProductsApiService } from 'src/app/shared/services/products/products-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  isReady: boolean = false;

  id: string;
  product: IProduct;
  imageDir: string = IMAGE_PATHS.PRODUCTS_DIR;

  addToCartMsg: string = "";
  addToCartMsgTimeout: ReturnType<typeof setTimeout>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private productsApiService: ProductsApiService,
    public currencyService: CurrencyService,
    public cartService: CartService
    ) { }

  ngOnInit(): void {

    Spinner.show();

    this.activatedRoute.params.subscribe({
      next: data => this.id = data["id"]
    })

    // Fake json
    this.productsApiService.getAll().subscribe({
      next: data => {

        this.product = data.find(x => x.id == this.id);

        Spinner.hide();

        if(!this.product){
          this.router.navigateByUrl("/404");
          return;
        }

        this.title.setTitle(this.title.getTitle().replace("Product", this.product.title));
        
        this.isReady = true;
      }
    })
  }
  

  addToCart(input: HTMLInputElement): void {

    this.cartService.addItem(this.product, Number(input.value));
    input.value = "1";
    this.addToCartMsg = "Successfully added to cart.";

    clearTimeout(this.addToCartMsgTimeout);
    this.addToCartMsgTimeout = setTimeout(()=>this.addToCartMsg = "", 2000);
  }

}
