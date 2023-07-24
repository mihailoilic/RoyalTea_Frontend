import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  coverTitle: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.setCoverTitle();
    this.router.events.subscribe(() => this.setCoverTitle());
  }
  
  setCoverTitle(): void {
    this.coverTitle = this.route.snapshot.firstChild.data["title"];
  }

}
