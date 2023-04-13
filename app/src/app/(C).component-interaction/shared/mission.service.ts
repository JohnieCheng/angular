import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  // Observable string source
  private missionAnnouncedSource = new Subject<string>();
  // Observable string stream
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  // Observable string source
  private missionConfirmedSource = new Subject<string>();
  // Observable string stream
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
