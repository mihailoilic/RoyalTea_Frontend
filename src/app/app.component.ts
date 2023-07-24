import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'RoyalTea';

  constructor(private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      map(()=>getRouteTitle(this.activatedRoute))
    ).subscribe({
      next: pageTitle => {
        if(pageTitle) {
          this.titleService.setTitle(this.title + " | " + pageTitle)
        }
      }
    });

    function getRouteTitle(route: ActivatedRoute): Observable<Data> {
      return route.firstChild ? getRouteTitle(route.firstChild) : route.snapshot.data["title"];
    }


  }

}
