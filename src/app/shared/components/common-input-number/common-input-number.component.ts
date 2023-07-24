import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-input-number',
  templateUrl: './common-input-number.component.html',
  styleUrls: ['./common-input-number.component.scss']
})
export class CommonInputNumberComponent implements OnInit {

  @Input() value: number;
  @Input() max: number = 99;
  @Input() min: number = 1;

  @Output() valueEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {

    if(this.value<this.max)
      this.value++;

    this.valueEmitter.emit(this.value);
  }

  decrement(): void {

    if(this.value > this.min)
      this.value--;

    this.valueEmitter.emit(this.value);

  }





}
