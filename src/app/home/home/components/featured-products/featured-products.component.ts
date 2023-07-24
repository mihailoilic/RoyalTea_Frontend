import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IProduct } from 'src/app/shared/interfaces/i-product';
import { ProductsApiService } from 'src/app/shared/services/products/products-api.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  products: IProduct[] = [];
  @ViewChild("fpcc") check: ElementRef;

  constructor(private productsApiService: ProductsApiService) { }

  ngOnInit(): void {

    Spinner.show();

    this.productsApiService.getAll().subscribe({
      next: data => {

        // Take 6
        data = data.slice(0,6);

        this.products = data;
        setTimeout(()=>{
          this.check.nativeElement.click();
          Spinner.hide();
        });
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    });
  }

}
