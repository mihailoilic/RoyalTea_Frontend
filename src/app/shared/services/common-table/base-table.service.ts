import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonTableComponent } from '../../components/common-table/common-table.component';
import { IColumn } from '../../interfaces/i-column';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseTableService {

  protected abstract columns: IColumn[];

  public commonTableComponent: CommonTableComponent;
  public hasPaginator: boolean = true;


  abstract getAll(): Observable<any>;

  getColumns(): IColumn[] {
    return this.columns;
  }

  getColumnIndexes(): string[] {
    return this.columns.map(x => x.index);
  }


  constructor() { }
}
