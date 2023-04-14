import {Component, Input} from '@angular/core';
import {Hero} from "../shared/Hero";

@Component({
  selector: 'app-hero-detail',
  template: `
    <h2>{{hero.name}}</h2>
    <app-hero-team [hero]=hero></app-hero-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero!: Hero;
}
