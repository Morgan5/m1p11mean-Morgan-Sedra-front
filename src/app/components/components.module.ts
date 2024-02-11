import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { DemoFlexyModule } from '../demo-flexy-module';
import { MenuComponent } from './menu/menu.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { EmployerComponent } from './employer/employer.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TasksComponent } from './tasks/tasks.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { LoginClientComponent } from './login-client/login-client.component';


@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    MenuComponent,
    ExpansionComponent,
    FormsModule,
    ServicesComponent,
    EmployerComponent,
    ReservationsComponent,
    TasksComponent,
  ],
  exports: [
    MenuComponent,
    ExpansionComponent,
    ServicesComponent,
    EmployerComponent,
    ReservationsComponent,
    TasksComponent
  ],
  declarations: [ 
  
    InscriptionClientComponent, LoginClientComponent
  ]
})
export class ComponentsModule { }
