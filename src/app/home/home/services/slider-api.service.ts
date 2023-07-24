import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { ISlide } from '../interfaces/i-slide';

@Injectable({
  providedIn: 'root'
})
export class SliderApiService extends ApiService<ISlide> {

  constructor(http: HttpClient) {
    super(http, API.SLIDER)
  }

}
