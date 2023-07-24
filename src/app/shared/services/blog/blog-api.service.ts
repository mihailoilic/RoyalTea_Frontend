import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { IBlogPost } from '../../interfaces/i-blog-post';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService extends ApiService<IBlogPost> {

  constructor(http: HttpClient) { 
    super(http, API.BLOG)
  }
}
