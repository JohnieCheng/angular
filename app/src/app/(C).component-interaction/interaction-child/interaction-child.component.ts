import {Component, Input} from '@angular/core';
import {Hero} from "../shared/Hero";

@Component({
  selector: 'app-interaction-child',
  templateUrl: './interaction-child.component.html',
  styleUrls: ['./interaction-child.component.css']
})
export class InteractionChildComponent {

  // 使用输入绑定将数据从父级传递到子级
  @Input() hero!: Hero;
  @Input('master') masterName = '';

}
