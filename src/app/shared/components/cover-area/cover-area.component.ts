import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-area',
  templateUrl: './cover-area.component.html',
  styleUrls: ['./cover-area.component.scss']
})
export class CoverAreaComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
