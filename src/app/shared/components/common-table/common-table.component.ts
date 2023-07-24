import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Spinner } from '../../classes/Spinner';
import { ColumnType } from '../../enums/column-type';
import { BaseDataService } from '../../services/common-table/base-data.service';
import { BaseTableService } from '../../services/common-table/base-table.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnDestroy {

  @Input() dataService: BaseDataService;
  @Input() tableService: BaseTableService;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  subscription: Subscription = new Subscription();

  dataSource = new MatTableDataSource<any>([]);

  columnTypeEnum: typeof ColumnType = ColumnType;



  constructor() { }

  ngOnInit(): void {

    this.tableService.commonTableComponent = this;
    this.trackStorageChange();
    this.loadData();
  }

  loadData(): void {

    Spinner.show();
    
    this.tableService.getAll().subscribe({
      next: data => {
        this.dataService.setStorage(data);
        Spinner.hide();
      },
      error: err => {
        console.log(err);
        Spinner.hide();
      }
    });
  }

  ngAfterViewInit(): void {
    if(this.tableService.hasPaginator)
      this.dataSource.paginator = this.paginator;
  }

  trackStorageChange(): void {
    this.subscription.add(this.dataService.getStorage().subscribe({
      next: data => {
        this.dataSource.data = data
      }
    }));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
