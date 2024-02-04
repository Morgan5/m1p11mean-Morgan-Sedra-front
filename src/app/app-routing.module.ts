import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployerComponent } from './components/employer/employer.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"reservations", component:ReservationsComponent},
      {path:"services", component:ServicesComponent},
      {path:"employers", component:EmployerComponent},
      {path:"tasks",component:TasksComponent}
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
