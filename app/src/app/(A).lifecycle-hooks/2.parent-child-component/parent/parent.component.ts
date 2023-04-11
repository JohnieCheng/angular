import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {log} from "../../shared/utils";

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  prefix = 'parent  '
  name: string;

  @ViewChild(ChildComponent)
  child!: ChildComponent;
  @ViewChild('container')
  container!: ElementRef;


  constructor(private changed: ChangeDetectorRef) {
    this.name = '';
    log(this.prefix + 'constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    log(this.prefix + 'ngOnChanges')
  }

  ngOnInit(): void {
    log(this.prefix + 'ngOnInit')
  }

  ngDoCheck(): void {
    log(this.prefix + 'ngDoCheck')
  }

  ngAfterContentInit(): void {
    log(this.prefix + 'ngAfterContentInit')
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

  isContainerInit() {
    console.log(!!this.container)
    return this.container;
  }
}
