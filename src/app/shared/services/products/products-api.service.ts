import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { IProduct } from '../../interfaces/i-product';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ApiService<IProduct> {



  constructor(http: HttpClient) {
    super(http, API.PRODUCTS);
   }
}
