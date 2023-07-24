import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild("spinner") spinnerComponent: SpinnerComponent;

  constructor() { }

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {

    Spinner.component = this.spinnerComponent;
    setTimeout(()=>this.spinnerComponent.counter--);
  }

}
