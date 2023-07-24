import { Component, OnInit } from '@angular/core';
import { NAV } from 'src/app/constants/nav';
import { ApiChildrenRoutes } from 'src/app/shared/classes/ApiChildrenRoutes';
import { AnyApiService } from 'src/app/shared/services/any-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: any[] = NAV;

  constructor(private apiService: AnyApiService) { }

  ngOnInit(): void {

    this.loadLinksFromApi();
  }

  loadLinksFromApi(): void {

    for(let link of this.links.filter(x => x.type == "megamenu")){
      for(let child of (link.children as any[]).filter(y => y.loadChildrenFromApi)){
        
        let options = child.loadChildrenFromApi;

        this.apiService.setPath(options.apiPath);

        ApiChildrenRoutes.getChildrenRoutesFromApi(this.apiService, options.titleProperty, options.baseRoute).subscribe({
          next: data => {
            
            child.children = data;

            //plugin Fix
            setTimeout(()=>window.dispatchEvent(new Event('resize')));
          },
          error: err => console.log(err)
        });

      }
    }
  }

}
