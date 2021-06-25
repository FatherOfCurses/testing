import {NgModule} from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbProgressBarModule,
  NbStepperModule,
  NbTableModule
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionPlanComponent} from './session-plan/session-plan.component';
import {CommonModule} from '@angular/common';
import { SessionLogComponent } from './session-log/session-log.component';
import { CountdownModule} from 'ngx-countdown';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    SessionPlanComponent,
    SessionLogComponent,
    TimerComponent,
  ],
  imports: [
    NbStepperModule,
    NbInputModule,
    NbLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    CommonModule,
    NbButtonModule,
    NbTableModule,
    NbProgressBarModule,
    CountdownModule
  ],
  providers: [],
})
export class SessionModule { }
