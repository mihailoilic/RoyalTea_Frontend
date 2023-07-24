import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API } from 'src/app/constants/apis';
import { CONFIG } from 'src/app/constants/config';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AnyApiService } from 'src/app/shared/services/any-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
