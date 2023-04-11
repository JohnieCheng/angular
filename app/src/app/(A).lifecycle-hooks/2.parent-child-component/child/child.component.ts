import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {log} from "../../shared/utils";
import {ChildContentComponent} from "../child-content/child-content.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  prefix = 'child  ';

  @Input()
  name: string;

  @ContentChild(ChildContentComponent)
  contentComponent!: ChildContentComponent;

  constructor() {
    this.name = '';
    log(this.prefix + 'constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    log(this.prefix + 'ngOnChanges')
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      log(`${this.prefix} ngOnChanges : ${propName}: currentValue = ${cur}, previousValue = ${prev}`)
    }
  }

  ngOnInit(): void {
    log(this.prefix + 'ngOnInit')
    Promise.resolve(this.contentComponent).then(value => log(value))
  }

  ngDoCheck(): void {
    log(this.prefix + 'ngDoCheck')
  }

  ngAfterContentInit(): void {
    log(this.prefix + 'ngAfterContentInit')
    console.log(this.contentComponent)
  }

  ngAfterContentChecked(): void {
    log(this.prefix + 'ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    log(this.prefix + 'ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    log(this.prefix + 'ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    log(this.prefix + 'ngOnDestroy')
  }
}
