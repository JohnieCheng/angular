import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent {
  private _name = '';

  // 使用 setter 拦截输入属性更改
  @Input()
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
}
