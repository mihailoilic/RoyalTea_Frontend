import { Component, Input, OnInit } from '@angular/core';
import { FiltersFormService } from '../../services/filtering/filters-form.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filters: any = {
    tastingNotes: [],
    caffeineContent: []
  }

  constructor(
    public filtersService: FiltersFormService
    ) { }

  ngOnInit(): void {


  }


}
