import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AnyApiService extends ApiService<any> {

  constructor(http: HttpClient) { 
    super(http, "");
  }

}
