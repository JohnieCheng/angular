import {Component, ContentChild, Input} from '@angular/core';
import {getNextId} from "./utils";
import {ZippyContentDirective} from "./zippy-content.directive";

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.component.html',
  styleUrls: ['./example-zippy.component.css']
})
export class ExampleZippyComponent {
  contentId = `zippy-${getNextId()}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}
