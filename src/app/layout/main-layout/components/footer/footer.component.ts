import { Component, OnInit } from '@angular/core';
import { NAV } from 'src/app/constants/nav';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  nav: any[] = NAV;

  constructor() { }

  ngOnInit(): void {
  }

}
