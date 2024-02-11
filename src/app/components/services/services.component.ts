import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  imports: [DemoFlexyModule,CommonModule,NgClass,HttpClientModule,FormsModule],
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent  {
  isVisibleFrom:boolean = false;
  services: any[] = [];
  newService = {
    name: '',
    duration: 0,
    price: 0,
    commissionPercentage: 0,
    description: '',
  };
  editingService: any = null;

  constructor(private servicesService: ServicesService){}

  ngOnInit(): void{
    this.loadServices();
  }

  loadServices() {
    this.servicesService.getAllServices().subscribe((services) => {
      this.services = services;
      console.log(services);
    });
  }

  onSubmit(){
    if(this.editingService){
      this.servicesService.updateService(this.editingService._id,this.newService).subscribe(
        (response)=>{
          this.loadServices();
          console.log('Service modifié avec succès :',response);
        },
        (error)=>{
          console.log('Erreur lors de la modification du service :',error);
        }
      );
      this.newService = {
        name: '',
        duration: 0,
        price: 0,
        commissionPercentage: 0,
        description: '',
      };
      this.editingService = null;
      this.isVisibleFrom = false;
    }
    else{
      this.servicesService.createService(this.newService).subscribe(
        (response) => {
          this.loadServices();
          console.log('Service créé avec succès :', response);
        },
        (error) => {
          console.error('Erreur lors de la création du service :', error);
        }
      );
      this.isVisibleFrom = false;
    }
  }

  onDelete(serviceId: string){
    this.servicesService.deleteService(serviceId).subscribe(
    (response)=>{
      console.log('Service supprimé avec succès :', response);
      this.loadServices();  
    },
    (error)=>{
      console.error('Erreur lors de la suppression du service :', error);
    }
    )
  };

  onEdit(service: any) {
    this.newService = { ...service };// Mettez à jour le formulaire avec les valeurs du service en cours d'édition
    this.editingService = service;
    this.isVisibleFrom = true;
  }

  openNewService(){
    this.newService = {
      name: '',
      duration: 0,
      price: 0,
      commissionPercentage: 0,
      description: '',
    };
    this.isVisibleFrom = true;
  }

  closeNewService(){
    this.isVisibleFrom = false;
  }

  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
  ]
}
