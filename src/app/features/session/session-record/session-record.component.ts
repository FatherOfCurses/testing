import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session-record',
  templateUrl: './session-record.component.html',
  styleUrls: ['./session-record.component.scss']
})
export class SessionRecordComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  finishSession(): void {
    this.router.navigate(['/sessionLog']);
  }

}
