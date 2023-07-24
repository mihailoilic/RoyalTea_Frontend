import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminPostsDataService } from '../../services/data/admin-posts-data.service';
import { AdminPostsTableService } from '../../services/table/admin-posts-table.service';
import { AdminPostFormComponent } from './admin-post-form/admin-post-form.component';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(
    public tableService: AdminPostsTableService,
    public dataService: AdminPostsDataService,
    public matDialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  addNewPost(): void {

    this.matDialog.open(AdminPostFormComponent, {
      width: "1200px"
    }).afterClosed().subscribe(data =>{
      if(data){
        this.tableService.commonTableComponent.loadData();
      }
    });

  }

}
