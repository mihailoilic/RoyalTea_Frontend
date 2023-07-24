import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { ApiService } from 'src/app/shared/services/api.service';
import { ITestimonial } from '../interfaces/i-testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialApiService extends ApiService<ITestimonial> {

  constructor(http: HttpClient) { 
    super(http, API.TESTIMONIALS)
  }
}
