import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {log} from "../shared/utils";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name: string;

  constructor() {
    this.name = '';
    log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    log('ngOnChanges')
  }

  ngOnInit(): void {
    log('ngOnInit')
  }

  ngDoCheck(): void {
    log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    log('ngOnDestroy')
  }
}
