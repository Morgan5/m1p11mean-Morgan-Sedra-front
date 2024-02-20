import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployerComponent } from './components/employer/employer.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { InscriptionClientComponent } from './components/inscription-client/inscription-client.component';
import { LoginClientComponent } from './components/login-client/login-client.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { AppointmentHistoryComponent } from './components/dashboard-client/dashboard-client-components/appointment-history/appointment-history.component';
import { AppointmentSetupComponent } from './components/dashboard-client/dashboard-client-components/appointment-setup/appointment-setup.component';
import { OnlinePaymentComponent } from './components/dashboard-client/dashboard-client-components/online-payment/online-payment.component';
import { PreferenceManagementComponent } from './components/dashboard-client/dashboard-client-components/preference-management/preference-management.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginEmployeeManagerComponent } from './components/login-employee-manager/login-employee-manager.component';
import { DashboardEmployeeComponent } from './components/dashboard-employee/dashboard-employee.component';
import { ReservationEmployeeComponent } from './components/reservation-employee/reservation-employee.component';

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
      {path:"clients",component:ClientsComponent},
      {path:"tasks",component:TasksComponent},
      {path:"inscription-client",component:InscriptionClientComponent},
      {path:"login-client",component:LoginClientComponent},
      {path:"dashboard-client",component:DashboardClientComponent},
      {path:"appointment-history-client",component:AppointmentHistoryComponent},
      {path:"appointment-setup-client",component:AppointmentSetupComponent},
      {path:"online-payment-client",component:OnlinePaymentComponent},
      {path:"preference-management-client",component:PreferenceManagementComponent},
      {path:"login-employee-manager",component:LoginEmployeeManagerComponent},
      {path:"dashboard-employee",component:DashboardEmployeeComponent},
      {path:"reservation-employee",component:ReservationEmployeeComponent}
    ]
  },

  //{path:"", redirectTo:"/home", pathMatch:"full"},
  //{path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
