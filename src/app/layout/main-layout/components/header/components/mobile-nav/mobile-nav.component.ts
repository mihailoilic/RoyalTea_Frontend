import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  
  @Input() links: any[] = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }




  
  // Popravka za plugin iz templejta

  navigationSetup() {

    document.querySelector(".mobile-menu").addEventListener("click", event=>this.navigate(event));
    
  }

  navigate(event: any): void {
    event.preventDefault();

    if(event.target.tagName.toLowerCase() != "a")
      return;

    let classList = event.target.classList ?? [];
    if(classList.contains("meanmenu-reveal") || classList.contains("mean-expand") || classList.contains("disabled")) 
      return;

    let activeElement = document.querySelector(".mean-nav > ul > li a.active");
    if(activeElement)
      activeElement.classList.remove("active");

    event.target.classList.add("active");

    this.router.navigateByUrl(event.target.getAttribute("ng-reflect-router-link"));

    (document.querySelector(".meanmenu-reveal") as HTMLElement).click();
  }

}
