import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTestsComponent } from './car-tests.component';

describe('CarTestsComponent', () => {
  let component: CarTestsComponent;
  let fixture: ComponentFixture<CarTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
