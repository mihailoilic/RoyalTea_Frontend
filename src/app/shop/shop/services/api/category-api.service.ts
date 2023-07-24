import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { ICategory } from '../../interfaces/i-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService extends ApiService<ICategory> {

  constructor(http: HttpClient) { 
    super(http, API.CATEGORIES);
  }

}
