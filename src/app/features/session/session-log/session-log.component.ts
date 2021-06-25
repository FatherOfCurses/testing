import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import {Session} from '../../../models/session';

@Component({
  selector: 'app-session-record',
  templateUrl: './session-log.component.html',
  styleUrls: ['./session-log.component.scss']
})
export class SessionLogComponent implements OnInit, OnDestroy {
  actualSession: Session;
  sessionSubscription: Subscription;
  timerBar: Observable<number>;
  sessionLength: number;

  constructor() { }

  ngOnInit(): void {
    this.sessionLength = this.actualSession.practiceTime;
  }

  ngOnDestroy() {
    this.sessionSubscription.unsubscribe();
  }
}
