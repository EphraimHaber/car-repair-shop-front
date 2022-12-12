import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddBreakdownComponent } from './components/add-breakdown/add-breakdown.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CarBreakdownsComponent } from './components/car-breakdowns/car-breakdowns.component';
import { CarTestsComponent } from './components/car-tests/car-tests.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkerScoreboardsComponent } from './components/worker-scoreboards/worker-scoreboards.component';

const routes: Routes = [
  {
    path: '', 
    component: AdminDashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'about', component: AboutComponent},
      {path: 'tests', component: CarTestsComponent},
      {path: 'workerScoreboard', component: WorkerScoreboardsComponent},
      {path: 'breakdowns', component: CarBreakdownsComponent},
      {path: 'addBreakdown', component: AddBreakdownComponent},
      {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
