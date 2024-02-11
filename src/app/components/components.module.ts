import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsComponent } from './forms/forms.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ServicesComponent } from './services/services.component';
import { EmployerComponent } from './employer/employer.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TasksComponent } from './tasks/tasks.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { AppointmentSetupComponent } from './dashboard-client/dashboard-client-components/appointment-setup/appointment-setup.component';
import { AppointmentHistoryComponent } from './dashboard-client/dashboard-client-components/appointment-history/appointment-history.component';
import { PreferenceManagementComponent } from './dashboard-client/dashboard-client-components/preference-management/preference-management.component';
import { OnlinePaymentComponent } from './dashboard-client/dashboard-client-components/online-payment/online-payment.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    ButtonsComponent,
    SlideToggleComponent,
    SliderComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    FormsComponent,
    AlertsComponent,
    GridListComponent,
    TooltipsComponent,
    FormsModule,
    ServicesComponent,
    EmployerComponent,
    ReservationsComponent,
    TasksComponent
  ],
  exports: [
    AlertsComponent,
    FormsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    ExpansionComponent,
    ChipsComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonsComponent,
    ServicesComponent,
    EmployerComponent,
    ReservationsComponent,
    TasksComponent
  ],
  declarations: [ 
  
    InscriptionClientComponent, LoginClientComponent, DashboardClientComponent, AppointmentSetupComponent, AppointmentHistoryComponent, PreferenceManagementComponent, OnlinePaymentComponent
  ]
})
export class ComponentsModule { }
