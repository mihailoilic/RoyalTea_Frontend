import { Component, OnInit } from '@angular/core';
import { Spinner } from 'src/app/shared/classes/Spinner';
import { IBanner } from '../../interfaces/i-banner';
import { BannerApiService } from '../../services/banner-api.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

  banners: IBanner[] = [];


  constructor(private bannerApiService: BannerApiService) { }

  ngOnInit(): void {

    Spinner.show();

    this.bannerApiService.getAll().subscribe({
      next: data => {
        this.banners = data;
        Spinner.hide();
      },
      error: err => console.log(err)
    })
  }

}
