import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HEROES} from "./shared/Data";
import {CountdownTimerComponent} from "./countdown-timer/countdown-timer.component";
import {MissionService} from "./shared/mission.service";

@Component({
  selector: 'app-interaction-parent',
  templateUrl: './interaction-parent.component.html',
  styleUrls: ['./interaction-parent.component.css'],
  providers: [MissionService]
})
export class InteractionParentComponent implements AfterViewInit {
  heroes = HEROES;
  names = ['Dr. IQ', '   ', '  Bombasto  '];
  master = 'Master';


  major = 1;
  minor = 23;


  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];


  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;


  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  // 生命ngAfterViewInit()周期钩子是一个重要的问题。在Angular 显示父视图之前，计时器组件不可用。所以它最初显示0秒。
  // 然后 Angular 调用ngAfterViewInit生命周期挂钩，此时更新父视图的倒计时秒数显示为时已晚。Angular 的单向数据流规则防止在同一周期内更新父视图。应用程序必须等待一圈才能显示秒数。

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  // 父监听子事件
  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

  seconds() {
    return 0;
  }

  // 用于setTimeout()等待一个滴答声，然后修改该seconds()方法，以便它从计时器组件中获取未来的值。
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
