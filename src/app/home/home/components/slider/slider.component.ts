import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ISlide } from '../../interfaces/i-slide';
import { SliderApiService } from '../../services/slider-api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  slides: ISlide[];
  @ViewChild("check") check: ElementRef;

  constructor(private sliderService: SliderApiService) { }

  ngOnInit(): void {

    Spinner.show();

    this.sliderService.getAll().subscribe({
      next: data => {
         this.slides = data
         setTimeout(()=>{
           this.check.nativeElement.click();
           Spinner.hide();
          })
        },
        error: err => {
          console.log(err);
          Spinner.hide();
      }
    })
  }


}
