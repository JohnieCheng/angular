import {Component} from '@angular/core';
import {AdItem} from "../ad-item";
import {AdService} from "../ad.service";

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent {
  ads: AdItem [];

  constructor(private adService: AdService) {
    this.ads = this.adService.getAds();
  }
}
