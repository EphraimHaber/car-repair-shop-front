import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-tests',
  templateUrl: './car-tests.component.html',
  styleUrls: ['./car-tests.component.css']
})
export class CarTestsComponent implements OnInit {
  workers: any = []
  selected: any;
  selectedWroker: any = null
  assignWorker(test: any) {
    test.assigned_worker = this.selected;
    this.carService.updateTestAppointment(test).subscribe()
  }
  setFixed(test: any) {
    test.is_fixed = true;
    this.carService.updateTest(test).subscribe()
  }
  tests: any = []
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.tests = this.carService.getTests().subscribe((data: any) => {
      this.tests = data;
      console.log("object");
      console.log(JSON.stringify(data));

    })
    this.workers = this.carService.getWorkers().subscribe((data: any) => {
      this.workers = data;
      // console.log(this.workers);
    })

  }


}
