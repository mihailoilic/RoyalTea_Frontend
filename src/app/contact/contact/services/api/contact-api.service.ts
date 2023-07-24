import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService extends ApiService<any> {

  constructor(http: HttpClient) { 
    super(http, API.CONTACT);
  }
}
