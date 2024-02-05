import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

interface Appointment {
  _id: string;
  clientId: string;
  employeeId: string;
  serviceId: string;
  date: Date;
  status: string;
}

const appointments: Appointment[] = [
  {
    _id: "appointment123",
    clientId: "client789",
    employeeId: "employee002",
    serviceId: "serviceB",
    date: new Date("2024-02-15T14:30:00Z"),
    status: "completed"
  },
  {
    _id: "appointment456",
    clientId: "client123",
    employeeId: "employee003",
    serviceId: "serviceC",
    date: new Date("2024-03-05T09:45:00Z"),
    status: "cancelled"
  },
  {
    _id: "appointment789",
    clientId: "client456",
    employeeId: "employee001",
    serviceId: "serviceA",
    date: new Date("2024-04-20T16:00:00Z"),
    status: "scheduled"
  }
];

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [DemoFlexyModule,CommonModule,MatTableModule,FormsModule,MatInputModule],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  calendar: number[][] = [];
  reservations: Appointment[];
  isVisibleFrom:boolean = false;
  selectedReservation: Appointment | undefined;

  openEdit(reservationId: string):void{
    this.selectedReservation = this.reservations.find((app) => app._id === reservationId);
    this.isVisibleFrom = true;
    console.log(this.selectedReservation);
  }
  
  delete(reservationId: string):void {
    const index = this.reservations.findIndex((app) => app._id === reservationId);

    if (index !== -1) {
      this.reservations.splice(index, 1);
    }
  }

  openNewService(){
    this.isVisibleFrom = true;
  }

  closeNewService(){
    this.isVisibleFrom = false;
  }

  constructor() {
    this.generateCalendar();
    this.reservations = appointments;
  }

  generateCalendar() {
    this.calendar = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 0, 0, 0, 0] // 0 représente les jours du mois qui ne sont pas utilisés
    ];
  }
}
