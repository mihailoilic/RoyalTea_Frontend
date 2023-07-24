import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { ColumnType } from 'src/app/shared/enums/column-type';
import { IColumn } from 'src/app/shared/interfaces/i-column';
import { BlogApiService } from 'src/app/shared/services/blog/blog-api.service';
import { BaseTableService } from 'src/app/shared/services/common-table/base-table.service';

@Injectable({
  providedIn: 'root'
})
export class AdminPostsTableService extends BaseTableService {
  
  constructor(
    private blogApi: BlogApiService,
    private router: Router
    ) { 
    super();
  }
  
  getAll(): Observable<any> {

    return this.blogApi.getAll()
      .pipe(map(x => 
          x.map((p: any) => {
              p.image = {
                src: IMAGE_PATHS.BLOG_DIR + p.image,
                alt: p.title
              };
              return p;
          }).sort((a,b)=>a.date > b.date ? -1 : 1))
      );
  }

  
  protected columns: IColumn[] = [
    {
      index: "image",
      label: "Image",
      type: ColumnType.Image
    },
    {
      index: "title",
      label: "Title"
    },
    {
      index: "date",
      label: "Date",
      type: ColumnType.Custom,
      method: (el: any) => new DatePipe("en_US").transform(el.date)
    },
    {
      index: "view",
      label: "View",
      type: ColumnType.Button,
      method: (el: any) => this.router.navigateByUrl("/blog/" + el.id)
    },
    {
      index: "remove",
      label: "Remove",
      type: ColumnType.Button,
      method: (el: any) => {

        Spinner.show();

        this.blogApi.delete(el.id).subscribe({
          next: () => {
            Spinner.hide();
            this.commonTableComponent.loadData();
          },
          error: err => {
            Spinner.hide();
            console.log(err);
          }
        });
      }
    }
    
  ];
}
