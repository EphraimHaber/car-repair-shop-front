import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

import { AboutComponent } from './components/about/about.component';
import { CarTestsComponent } from './components/car-tests/car-tests.component';
import { WorkerScoreboardsComponent } from './components/worker-scoreboards/worker-scoreboards.component';
import { CarBreakdownsComponent } from './components/car-breakdowns/car-breakdowns.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCard, MatCardModule } from '@angular/material/card';
import { AddBreakdownComponent } from './components/add-breakdown/add-breakdown.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    CarTestsComponent,
    WorkerScoreboardsComponent,
    CarBreakdownsComponent,
    AddBreakdownComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class AdminModule { }
