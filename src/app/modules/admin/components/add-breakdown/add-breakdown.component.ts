import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-add-breakdown',
  templateUrl: './add-breakdown.component.html',
  styleUrls: ['./add-breakdown.component.css']
})
export class AddBreakdownComponent implements OnInit {
  selectedWorker: any;
  selectedCar: any;
  workers: any = []
  cars: any = []
  checkoutForm = this.formBuilder.group({
    description: '',
    bonus_points_on_fix: 1,
    urgency: 0,
    is_fixed: false,
    assigned_worker: '',
    car_to_repair: 1
  });

  constructor(private formBuilder: FormBuilder, private carService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.getAllCars().subscribe((data: any) => {
      this.cars = data;
    })
    this.workers = this.carService.getWorkers().subscribe((data: any) => {
      this.workers = data;
      // console.log(this.workers);
    })
  }
  onSubmit(): void {
    // Process checkout data here
    this.checkoutForm.value.assigned_worker = this.selectedWorker
    this.checkoutForm.value.car_to_repair = this.selectedCar
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert("description: " + this.checkoutForm.value.description + "\n"
               + "bonus_points_on_fix: " + this.checkoutForm.value.bonus_points_on_fix + "\n"
               + "urgency: "  + this.checkoutForm.value.urgency + "\n"
               + "is_fixed: " + this.checkoutForm.value.is_fixed + "\n"
               + "assigned_worker: " + this.checkoutForm.value.assigned_worker + "\n"
               + "car_to_repair: " + this.checkoutForm.value.car_to_repair)
    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
    this.selectedWorker = null;
    this.selectedCar = null;
  }
  getAllCars(): any {
    return this.carService.getCars()
  }

}
