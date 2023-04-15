import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sharding-data-child',
  templateUrl: './sharding-data-child.component.html',
  styleUrls: ['./sharding-data-child.component.css']
})
export class ShardingDataChildComponent {
  @Input() item = '';

  @Output() onDone = new EventEmitter<boolean>;

  done() {
    this.onDone.emit(true);
  }
}
