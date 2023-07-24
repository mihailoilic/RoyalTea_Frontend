import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ITestimonial } from '../../interfaces/i-testimonial';
import { TestimonialApiService } from '../../services/testimonial-api.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @ViewChild("tcc") check: ElementRef;
  testimonials: ITestimonial[] = [];

  constructor(private testimonialApiService: TestimonialApiService) { }

  ngOnInit(): void {

    Spinner.show();

    this.testimonialApiService.getAll().subscribe({
      next: data => {
        this.testimonials = data;
        setTimeout(()=>{
          this.check.nativeElement.click();
          Spinner.hide();
        });
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    })
  }

}
