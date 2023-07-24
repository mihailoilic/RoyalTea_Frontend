import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BasePaginationService {

  scrollElement: ElementRef;

  data: any[];
  dataOnPage: any[];

  page: number = 1;
  noOfPages: number = 0;
  abstract itemsPerPage: number;


  constructor() { }

  setData(data: any[]): void {
    this.data = data;
    this.calculateNoOfPages();
    this.setPage(1);
  }

  setPage(pageNo: number): void {

    let start: number = (pageNo - 1) * this.itemsPerPage;
    this.dataOnPage =  this.data.slice(start, start + this.itemsPerPage);
    this.page = pageNo;

    if(this.scrollElement)
      this.scrollElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    
  }

  calculateNoOfPages(): void {
    this.noOfPages = Math.ceil(this.data.length / this.itemsPerPage);
  }

}
