import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRecordComponent } from './session-record.component';

describe('SessionRecordComponent', () => {
  let component: SessionRecordComponent;
  let fixture: ComponentFixture<SessionRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test click finish button
});
