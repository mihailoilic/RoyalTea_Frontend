import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [

    trigger("showHide", [

      state("show", style({
        opacity: 1
      })),
      state("hide", style({
        opacity: 0,
        display: "none"
      })),

      transition("show => hide", [
        animate(".3s")
      ]),
      transition("hide => show", [
        animate(".6s")
      ])

    ])
  ]
})
export class SpinnerComponent implements OnInit {

  counter: number = 1;

  constructor() { }

  ngOnInit(): void {
    
  }

  animationStarted(event: AnimationEvent): void {
    if(this.counter > 0){
      event.element.classList.remove("d-none");
    }
  }

  animationEnded(event: AnimationEvent): void {
    if(this.counter <= 0){
      event.element.classList.add("d-none");
    }
  }

}
