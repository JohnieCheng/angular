import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.css']
})
export class VoterChildComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
