import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

import { CarBreakdownsComponent } from './car-breakdowns.component';

describe('CarBreakdownsComponent', () => {
  let component: CarBreakdownsComponent;
  let fixture: ComponentFixture<CarBreakdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBreakdownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBreakdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
