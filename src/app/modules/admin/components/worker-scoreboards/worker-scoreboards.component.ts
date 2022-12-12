import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-worker-scoreboards',
  templateUrl: './worker-scoreboards.component.html',
  styleUrls: ['./worker-scoreboards.component.css']
})
export class WorkerScoreboardsComponent implements OnInit {
  workers: any = []
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.workers = this.carService.getWorkers().subscribe((data: any) =>{
      this.workers = data;
      console.log(data);
    })
  }

}
