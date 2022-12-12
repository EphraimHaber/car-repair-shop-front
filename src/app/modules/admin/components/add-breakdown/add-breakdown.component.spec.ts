import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBreakdownComponent } from './add-breakdown.component';

describe('AddBreakdownComponent', () => {
  let component: AddBreakdownComponent;
  let fixture: ComponentFixture<AddBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBreakdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
