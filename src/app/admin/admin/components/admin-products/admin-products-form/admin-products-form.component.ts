import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ICurrency } from 'src/app/shared/interfaces/i-currency';
import { IProductPrice } from 'src/app/shared/interfaces/i-product';
import { CurrencyApiService } from 'src/app/shared/services/currency/currency-api.service';
import { ProductsApiService } from 'src/app/shared/services/products/products-api.service';
import { ICategory } from 'src/app/shop/shop/interfaces/i-category';
import { ISpecification } from 'src/app/shop/shop/interfaces/i-specification';
import { CategoryApiService } from 'src/app/shop/shop/services/api/category-api.service';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.scss']
})
export class AdminProductsFormComponent implements OnInit {

  form: FormGroup;
  isReady: boolean = false;

  categories: ICategory[] = [];
  currencies: ICurrency[] = [];
  specifications: ISpecification[] = [];
  specIterator: number = 0;

  @ViewChild("file") fileInput: ElementRef;
  filePath: string = "";
  setFilePath(path: string): void {
    this.filePath = path;
  }

  errorMsg: string;

  isEdit: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AdminProductsFormComponent>,
    private categoryApi: CategoryApiService,
    private currencyApi: CurrencyApiService,
    private productsApi: ProductsApiService
    ) { }

  ngOnInit(): void {

    this.isEdit = !!this.data.product;

    Spinner.show();
    forkJoin({
      categories: this.categoryApi.getAll(),
      currencies: this.currencyApi.getAll()
    }).subscribe({
      next: data => {

        this.categories = data.categories;
        this.currencies = data.currencies;

        this.form = new FormGroup({
          title: new FormControl(this.isEdit ? this.data.product.title : "", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
          description: new FormControl(this.isEdit ? this.data.product.description : "", [Validators.required, Validators.minLength(20)]),
          categoryId: new FormControl(this.isEdit ? this.data.product.category.id : "", [Validators.required]),
          specificationValueIds: new FormArray([]),
          prices: this.getPricesFormArray()
        });

        this.isReady = true;
        setTimeout(()=>this.setSpecifications());
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    });

  }

  setSpecifications(): void {

    let formArray = new FormArray([]);

    if(!this.form.get('categoryId').value) {
      this.form.setControl("specificationValueIds", formArray);
      this.specifications = [];
      return;
    }

    let catSpec =  this.categories.find(x => x.id == this.form.get('categoryId').value).specifications;

    for(let spec of catSpec)
      for(let value of spec.values)
        formArray.push(new FormControl(this.isEdit ? this.data.product.productSpecifications.some((x: ISpecification) => x.values.some(v => v.id == value.id)) : false));

    this.form.setControl("specificationValueIds", formArray);    
    this.specifications = catSpec;
  }

  setSpecIterator(): boolean {
    this.specIterator = 0;
    return true;
  }

  getSpecIterator(): number {
    return this.specIterator++;
  }

  getPricesFormArray(): FormArray {

    return new FormArray(this.currencies.map(
      x => new FormControl(this.isEdit ? (this.data.product.prices.find((p: any) => p.currencyIso == x.isoCode) ?? {value: ""}).value : "", [Validators.required, Validators.min(0.01)])
    ));
  }



  submit(): void {

    let formData = new FormData();
    formData.append("title", this.form.get("title").value);
    formData.append("description", this.form.get("description").value);
    formData.append("categoryId", this.form.get("categoryId").value);

    if(!this.isEdit || (this.isEdit && this.fileInput.nativeElement.files.length))
      formData.append("imageFile", this.fileInput.nativeElement.files[0]);
  
    let i = 0;
    let specIds = this.specifications.reduce((arr: number[], x: ISpecification) => {
      return arr.concat(x.values.filter(v => this.form.get("specificationValueIds").value[i++]).map(v => v.id));
    }, []);
    specIds.forEach(x => formData.append("specificationValueIds[]", String(x)));

    i = 0;
    let prices: IProductPrice[] =  this.currencies.map((x: ICurrency) => {
      return {
        currencyIso: x.isoCode,
        value: this.form.get("prices").value[i++]
      };
    });

    prices.forEach(x => formData.append("prices[]", JSON.stringify(x)));
    
    Spinner.show();

    if(this.isEdit) {

      this.productsApi.update(this.data.product.id, formData).subscribe({
        next: data => {
          Spinner.hide();
          this.dialogRef.close(true);
        },
        error: err => this.errorHandler(err)
      });
    }

    else {

      this.productsApi.create(formData).subscribe({
        next: data => {
          Spinner.hide();
          this.dialogRef.close(true);
        },
        error: err => this.errorHandler(err)
      });
    }

  }

  errorHandler(err: any): void {

    Spinner.hide();
    console.log(err);
    if(err.error && err.error.message){
      this.errorMsg = "An error has occurred: " + err.error.message;
    }
    else if(err.error && err.error.errors){
      this.errorMsg = err.error.errors.map((x: any) => x.error).join("<br/>");
    }
    else {
      this.errorMsg = "An error has occurred. Try again later.";
    }
  }

}
