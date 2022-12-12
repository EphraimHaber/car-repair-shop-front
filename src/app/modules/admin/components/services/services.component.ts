import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private carService: CarsService) { }
  cars: any = []

  ngOnInit(): void {
    this.cars = this.getAllCars().subscribe((data: any) => {
      this.cars = data;
    })
  }
  getAllCars(): any {
    return this.carService.getCars()
  }

}
