import {Directive, HostBinding, HostListener} from '@angular/core';
import {ExampleZippyComponent} from "./example-zippy.component";

@Directive({
  selector: 'button[appExampleZippyToggle]'
})
export class ZippyToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ExampleZippyComponent) {}
}
