import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { ITestimonial } from 'src/app/home/home/interfaces/i-testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  image: string = IMAGE_PATHS.TESTIMONIAL;
  @Input() testimonial: ITestimonial;

  constructor() { }

  ngOnInit(): void {
  }

}
