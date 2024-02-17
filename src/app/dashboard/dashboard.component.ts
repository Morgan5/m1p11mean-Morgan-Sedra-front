import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AppointmentService } from '../components/reservations/reservations.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  appointmentPending: any[] = [];
  appointmentConfirmed: any[] = [];
  appointmentCancelled: any[] = [];
  
  constructor(private appointmentService: AppointmentService ) { }

  ngOnInit(): void {
    function refreshPageOnce() {
      if (!sessionStorage.getItem('pageRefreshed')) {
        sessionStorage.setItem('pageRefreshed', 'true');
        location.reload();
      }
    }
    refreshPageOnce();
    
    const token = sessionStorage.getItem('token');
    if(token){
      const decodedToken = jwtDecode(token);
      //console.log(decodedToken);
    }
    this.loadAppointment();
  }

  loadAppointment(){
    this.appointmentService.getFullAppointmentPending().subscribe(
      (response)=>{
        this.appointmentPending = response;
      },
      (error)=>{
        console.log('Erreur lors de la load Appointment',error);
      }
    );
    this.appointmentService.getFullAppointmentConfirmed().subscribe(
      (response)=>{
        this.appointmentConfirmed = response;
      },  
      (error)=>{
        console.log('Erreur lors de la load Appointment',error);
      }
    );
    this.appointmentService.getFullAppointmentCancelled().subscribe(
      (response)=>{
        this.appointmentCancelled = response;
      },
      (error)=>{
        console.log('Erreur lors de la load Appointment',error);
      }
    );
  }

  updateStatus(appointmentId:string,appointmentData: any){
    this.appointmentService.updateAppointmentStatus(appointmentId,appointmentData).subscribe(
      (response)=>{
        console.log('Rendez vous modifier avec success',response);
      },
      (error)=>{
        console.log('Erreur lors de la modification',error);
      }
    )
  } 

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id === 'cdk-drop-list-0' ) {
        const data = {
          status: "Pending"
        }
        this.updateStatus(event.item.data._id,data);
        console.log("Pending");
      }
      if (event.container.id === 'cdk-drop-list-1' ) {
        const data = {
          status: "Confirmed"
        }
        this.updateStatus(event.item.data._id,data);
        console.log("Confirmed");
      }
      if (event.container.id === 'cdk-drop-list-2' ) {
        const data = {
          status: "Cancelled"
        }
        this.updateStatus(event.item.data._id,data);
        console.log("Cancelled");
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  // && event.previousContainer.id === 'cdk-drop-list-0'
  // event.item.data[0]._id
}
