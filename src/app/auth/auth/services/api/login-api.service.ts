import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { IToken } from 'src/app/shared/interfaces/i-token';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService extends ApiService<IToken> {

  constructor(http: HttpClient) { 
    super(http, API.TOKEN)
  }
}
