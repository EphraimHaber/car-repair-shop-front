import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerScoreboardsComponent } from './worker-scoreboards.component';

describe('WorkerScoreboardsComponent', () => {
  let component: WorkerScoreboardsComponent;
  let fixture: ComponentFixture<WorkerScoreboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerScoreboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerScoreboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
