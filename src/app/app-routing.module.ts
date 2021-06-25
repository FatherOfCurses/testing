import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { SessionPlanComponent } from './features/session/session-plan/session-plan.component';
import {SessionLogComponent} from './features/session/session-log/session-log.component';


const routes: Routes = [
  {path: '' , component: LandingPageComponent},
  {path: 'session', component: SessionPlanComponent},
  {path: 'sessionRecord', component: SessionLogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
