import { Component } from '@angular/core';

@Component({
  selector: 'app-sharding-data-parent',
  templateUrl: './sharding-data-parent.component.html',
  styleUrls: ['./sharding-data-parent.component.css']
})
export class ShardingDataParentComponent {
  currentItem = 'Television';
  done = false;

  onDone(done: boolean) {
    this.done = done;
  }
}
