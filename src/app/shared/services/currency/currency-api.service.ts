import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ICurrency } from '../../interfaces/i-currency';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/constants/apis';


@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService extends ApiService<ICurrency>{

  constructor(http: HttpClient) {
    super(http, API.CURRENCY);
   }
}
