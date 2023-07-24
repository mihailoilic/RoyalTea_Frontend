import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/i-product';
import { ISpecification } from '../../interfaces/i-specification';
import { ShopPaginationService } from '../pagination/shop-pagination.service';
import { FiltersFormService } from './filters-form.service';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {
  
  products: IProduct[] = [];

  filters: ISpecification[] = [];
  
  sort: string = "latest";
  

  constructor(
    private filtersFormService: FiltersFormService,
    private paginationService: ShopPaginationService
    ) { }

  filterProducts(): void {

    let filteredProducts = this.products;
    let formFilters: any = this.filtersFormService.form.value;

    let checkboxFilters: any = Object.fromEntries(Object.entries(formFilters).filter(el => Array.isArray(el[1])));
    filteredProducts = this.applyCheckboxFilters(filteredProducts, checkboxFilters);

    let keywords: string = formFilters.keywords;
    if(keywords) {
      filteredProducts = filteredProducts.filter(x => x.title.toLowerCase().includes(keywords.trim().toLowerCase()))
    }

    this.sortProducts(filteredProducts);

    this.paginationService.setData(filteredProducts);

  }

  applyCheckboxFilters(products: IProduct[], checkboxFilters: any): IProduct[] {

    for(let prop in checkboxFilters){

      let checked: number[] = this.filters.find(x => String(x.id) == prop).values.filter((el, i) => checkboxFilters[prop][i]).map(x => x.id);

      if(!checked.length)
        continue;

      products = products.filter((product: any) => 
          product.productSpecifications.some((spec: any) => 
            spec.values.some((val: any) => checked.includes(val.id))
      ));

    }
    return products;
  }

  sortProducts(filteredProducts: IProduct[]): void {

    filteredProducts.sort((a: IProduct, b: IProduct) => {

      switch(this.sort.split("-")[0]){
        case "latest": 
            return a.createdAt > b.createdAt ? -1 : 1;
        case "discounted":
            return (b.discount ?? 0) - (a.discount ?? 0);
        case "name":
            return a.title.localeCompare(b.title);
        case "price":
            let direction = this.sort.split("-")[1] == "asc" ? 1 : -1;
            return (a.prices[0].value - b.prices[0].value) * direction;
        default:
            return 0;
            
      }
    });
  }
}
