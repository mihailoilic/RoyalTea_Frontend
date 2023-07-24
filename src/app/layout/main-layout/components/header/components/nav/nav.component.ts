import { Component, Input, OnInit } from '@angular/core';
import { AnyApiService } from 'src/app/shared/services/any-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() links: any[] = [];

  constructor(public apiService: AnyApiService) { }

  ngOnInit(): void {


  }



}
