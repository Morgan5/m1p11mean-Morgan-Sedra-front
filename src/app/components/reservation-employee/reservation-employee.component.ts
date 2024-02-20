import { Component } from '@angular/core';
import { AppointmentService } from '../reservations/reservations.service';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { CommonModule, NgClass } from '@angular/common';
import { ReservationEmployeeFilterPipe } from './reservation-employee.filter.pipe';

@Component({
  selector: 'app-reservation-employee',
  standalone: true,
  imports:[DemoFlexyModule,CommonModule,FormsModule,NgClass],
  templateUrl: './reservation-employee.component.html',
  styleUrls: ['./reservation-employee.component.scss']
})

export class ReservationEmployeeComponent {
  appointments: any[] = [];
  searchTerm: string = '';
  user = { id: '',firstName: '', lastName: '', token: '' };
  
  constructor(private appointmentService: AppointmentService,private reservationsEmployeeFilter: ReservationEmployeeFilterPipe){
    const token = sessionStorage.getItem('token');
    if(token){
      const decodedToken: any = jwtDecode(token);
      if(decodedToken){
        this.user.id = decodedToken._id;
        this.user.firstName = decodedToken.firstName;
        this.user.lastName = decodedToken.lastName;
      }
    }
  }

  ngOnInit(){
    this.loadAppointment();
  }

  loadAppointment(){
    this.appointmentService.getAllAppointmentsForEmployee(this.user.id).subscribe(
      (response)=>{
        this.appointments = response;
      },
      (error)=>{
        console.log('Erreur lors de l\'importation: ',error);
      }
    )
  }

  filterReservations(){
    if(this.searchTerm === ''){
      this.loadAppointment();
    }else{
      this.appointments = this.reservationsEmployeeFilter.transform(this.appointments,this.searchTerm);
    }
  }

  onSearchChange(){
    this.filterReservations();
  }

}
