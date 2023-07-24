import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductsDataService } from '../../services/data/admin-products-data.service';
import { AdminProductsTableService } from '../../services/table/admin-products-table.service';
import { AdminProductsFormComponent } from './admin-products-form/admin-products-form.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  constructor(
    public matDialog: MatDialog,
    public tableService: AdminProductsTableService,
    public dataService: AdminProductsDataService
  ) { }

  ngOnInit(): void {
    this.tableService.component = this;
  }
  
  openProductForm(product: any = null): void {

    this.matDialog.open(AdminProductsFormComponent, {
      data: {product: product},
      width: "1200px"
    }).afterClosed().subscribe(data =>{
      if(data){
        this.tableService.commonTableComponent.loadData();
      }
    });

  }

}
