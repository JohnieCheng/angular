import {Component, Input} from '@angular/core';
import {Hero} from "../shared/Hero";

@Component({
  selector: 'app-hero-main',
  template: `
    <app-quest-summary></app-quest-summary>
    <app-hero-detail [hero]="hero" [class.active]="hero.active">
      <app-hero-controls [hero]="hero"></app-hero-controls>
    </app-hero-detail>
  `
})
export class HeroMainComponent {
  @Input()
  hero!: Hero

}
