import {Component, OnInit} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  goalTime: number;
  isRunning: boolean;
  isGoalMet: boolean;
  displayTime: number;
  currentTimerValue: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  // Basic function here:
  // User has set a goal time
  // 1. When user clicks "Start" timer should start running and update view
  // 2. When timer exceeds goal time, view should update to indicate goal reached
  // 3. Timer stops when user clicks "Stop"
  // 4. Provide a "Pause" for user to pause without ending session

  onClick() {
    const goalReached = this.currentTimerValue.pipe(
      filter(time => time > this.goalTime)
    );
    if (!this.isRunning) {
      // change button to pause
      const currentTimerValue = timer(0, 1000).subscribe(next => this.displayTime);
    } else {
      this.isRunning = false;
      // change button to play

    }
  }

}
