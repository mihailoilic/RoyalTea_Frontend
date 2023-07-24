import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_PATHS } from 'src/app/constants/image-paths';
import { IBanner } from 'src/app/home/home/interfaces/i-banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  imagesDir: string = IMAGE_PATHS.BANNERS_DIR;
  @Input() banner: IBanner;

  constructor() { }

  ngOnInit(): void {
  }

}
