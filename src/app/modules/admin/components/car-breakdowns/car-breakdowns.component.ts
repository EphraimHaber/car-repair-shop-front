import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-breakdowns',
  templateUrl: './car-breakdowns.component.html',
  styleUrls: ['./car-breakdowns.component.css']
})
export class CarBreakdownsComponent implements OnInit {

  breakdowns: any = []
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.breakdowns = this.carService.getBreakdowns().subscribe((data: any) =>{
      this.breakdowns = data;
      // console.log(data);
    })
  }
  markAsFixed(breakdown: any){
    breakdown.is_fixed = true;
    this.carService.updateBreakdown(breakdown).subscribe()
  }

}
