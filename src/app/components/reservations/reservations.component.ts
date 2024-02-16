import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { AppointmentService } from './reservations.service';
import { ClientsService } from '../clients/clients.service';
import { EmployerService } from '../employer/employer.service';
import { ServicesService } from '../services/services.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [DemoFlexyModule,CommonModule,MatTableModule,FormsModule,MatInputModule,NgClass,HttpClientModule],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  calendar: number[][] = [];
  isVisibleFrom:boolean = false;
  isFormService:boolean = false;
  isEditEnabled: boolean = false;
  isServiceVisible: boolean = false;
  loading: boolean = false;

  appointments: any[] = [];
  selectedAppointment: any;
  clients: any[] = [];
  employees: any[] = [];
  services: any[] = [];
  newAppoint = {
    clientId: '',
    appointmentDate: new Date().toISOString().slice(0, -1), 
    status: '',
    requestedServices: [
      {
        serviceId: '',
        selectedEmployee: ''
      }
    ]
  };
  newService = {
    requestedServices: [
      {
        serviceId: '',
        selectedEmployee: ''
      }
    ]
  };  
  editingAppoint: any = null;

  constructor(private appointmentService: AppointmentService,private clientService: ClientsService,private employeeService: EmployerService,private serviceService: ServicesService) {
    this.generateCalendar();
  }

  ngOnInit(){
    this.loadAppointment();
    this.clientService.getAllClientsManager().subscribe((clients)=>{
      this.clients = clients;
    });
    this.employeeService.getAllEmployee().subscribe((employees)=>{
      this.employees = employees;
    });
    this.serviceService.getAllServices().subscribe((services)=>{
      this.services = services;
    });
  }

  loadAppointment(){
    this.appointmentService.getFullAppointment().subscribe(
      (appointments)=>{
      this.appointments = appointments;
      }
    )
  };

  onSubmit(){
    if(this.editingAppoint){
      this.appointmentService.updateAppointment(this.editingAppoint._id,this.newAppoint).subscribe(
        (response)=>{
          this.loadAppointment();
          console.log('Rendez-vous modifié avec succès :',response);
        },
        (error)=>{
          console.log('Erreur lors de la modification du rendez-vous :',error);
        }
      )
      this.newAppoint = {
        clientId: '',
        appointmentDate: new Date().toISOString().slice(0, -1), 
        status: '',
        requestedServices: [
          {
            serviceId: '',
            selectedEmployee: ''
          }
        ]
      };
      this.editingAppoint = null;
      this.isVisibleFrom = false;
    }
    else{
      this.appointmentService.createAppointment(this.newAppoint).subscribe(
        (response)=>{
          this.loadAppointment();
          this.isVisibleFrom = false;
          console.log('Rendez vous cree avec successe',response);
        },
        (error)=>{
          console.log('Erreur lors de creation du rendez vous:',error);
        }
      )
    }
  };

  onSubmitService(){
    this.appointmentService.createRequestedServices(this.editingAppoint._id,this.newService).subscribe(
      (response)=>{
        this.isFormService = false;
        this.editingAppoint = null;
        console.log('Service cree avec successe',response);
      },
      (error)=>{
        console.log('Erreur lors de creation du service:',error);
      }
    )
  }

  onDelete(appointId: string){
    this.appointmentService.deleteAppointment(appointId).subscribe(
      (response)=>{
        this.loadAppointment();
        console.log('Rendez vous supprimer avec successe',response);
      },
      (error)=>{
        console.log('Erreur lors de la suppretion: ',error);
      }
    )
  }

  onEdit(appoint: any):void{
    this.newAppoint.clientId = appoint.clientId._id;
    this.newAppoint.appointmentDate = new Date(appoint.appointmentDate).toISOString().slice(0, -1);
    this.newAppoint.status = appoint.status;
    this.newAppoint.requestedServices[0].serviceId = appoint.requestedServices[0].serviceId._id;
    this.newAppoint.requestedServices[0].selectedEmployee = appoint.requestedServices[0].selectedEmployee._id;
    
    this.editingAppoint = {
      _id: appoint._id,
      clientId: appoint.clientId._id,
      appointmentDate: new Date(appoint.appointmentDate).toISOString().slice(0, -1), 
      status: appoint.status,
      requestedServices: [
        {
          serviceId: appoint.requestedServices[0].serviceId._id,
          selectedEmployee: appoint.requestedServices[0].selectedEmployee._id
        }
      ]
    }
    this.isEditEnabled = false;
    this.isVisibleFrom = !this.isVisibleFrom;
  }

  onAdd(appoint: any){
    this.editingAppoint = {
      _id: appoint._id,
      clientId: appoint.clientId._id,
      appointmentDate: new Date(appoint.appointmentDate).toISOString().slice(0, -1), 
      status: appoint.status,
      requestedServices: [
        {
          serviceId: appoint.requestedServices[0].serviceId._id,
          selectedEmployee: appoint.requestedServices[0].selectedEmployee._id
        }
      ]
    }
    this.isFormService = !this.isFormService;
  }

  closeNewServise(){
    this.isFormService = false;
  }
  
  onService(appointId: string){
    this.loading = true;
    this.isServiceVisible = !this.isServiceVisible;
    this.appointmentService.getAppointmentById(appointId).subscribe(
      (response)=>{
        this.selectedAppointment = response;
        console.log(response);
      },
      (error)=>{
        console.log('Erreur lors de la recherche: ',error);
      },
      ()=>{
        this.loading = false
      }
    )
  }

  openNewReservation(){
    this.isVisibleFrom = !this.isVisibleFrom;
    this.isEditEnabled = true;
    this.newAppoint = {
      clientId: '',
      appointmentDate: new Date().toISOString().slice(0, -1), 
      status: '',
      requestedServices: [
        {
          serviceId: '',
          selectedEmployee: ''
        }
      ]
    }
  }

  closeNewReservation(){
    this.isVisibleFrom = false;
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
