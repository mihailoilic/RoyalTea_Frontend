import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IProduct } from 'src/app/shared/interfaces/i-product';
import { ProductsApiService } from 'src/app/shared/services/products/products-api.service';
import { ICategory } from './interfaces/i-category';
import { ISpecificationValue } from './interfaces/i-specification';
import { CategoryApiService } from './services/api/category-api.service';
import { FilteringService } from './services/filtering/filtering.service';
import { FiltersFormService } from './services/filtering/filters-form.service';
import { ShopPaginationService } from './services/pagination/shop-pagination.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @ViewChild("pageTop") private pageTopElement: ElementRef;

  isReady: boolean = false;

  products: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private productsApiService: ProductsApiService,
    private categoryApiService: CategoryApiService,
    private filtersFormService: FiltersFormService,
    public filteringService: FilteringService,
    public paginationService: ShopPaginationService
    ) { }

  ngOnInit(): void {
    if(this.route.snapshot.params["sort"]){
      this.filteringService.sort = this.route.snapshot.params["sort"];
      this.router.navigateByUrl("/shop");
    }
    this.loadContent();
  }

  loadContent(): void {

    Spinner.show();
    
    forkJoin({
      "categories": this.categoryApiService.getAll(),
      "products": this.productsApiService.getAll()
    }).subscribe({
      next: data => {
        this.categories = data.categories;
        this.products = data.products;

        this.route.params.subscribe(data => {
          this.setCategory(data["id"]);
        });        

        this.paginationService.scrollElement = this.pageTopElement;
        setTimeout(()=> this.isReady = true);
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    })
    
  }

  setCategory(id: number){

    if(id)
      this.filteringService.products = this.products.filter(p => p.category.id == id);
    else
      this.filteringService.products = this.products;

    this.filteringService.filters = [];
    let filtersFormGroup: any = {
      keywords: new FormControl("")
    };
      
    let selectedCategory: ICategory = id ? this.categories.find(x => x.id == id) : null;
    if(selectedCategory){
      for(let spec of selectedCategory.specifications){
        filtersFormGroup[spec.id] = this.filtersFormService.createCheckboxFormArray(spec.values.map((x: ISpecificationValue) => x.id));
        this.filteringService.filters.push(spec);
      }
    }
    
    this.filtersFormService.form = new FormGroup(filtersFormGroup);
    this.filtersFormService.form.valueChanges.subscribe(()=>this.filteringService.filterProducts());
    this.filteringService.filterProducts();
  }

}
