import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { IBanner } from '../interfaces/i-banner';

@Injectable({
  providedIn: 'root'
})
export class BannerApiService extends ApiService<IBanner>{

  constructor(http: HttpClient) { 
    super(http, API.BANNERS)
  }
}
