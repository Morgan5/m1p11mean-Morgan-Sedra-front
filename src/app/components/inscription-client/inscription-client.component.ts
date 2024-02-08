import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../user-auth.service';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.scss'],
})
export class InscriptionClientComponent implements OnInit {
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = '';
  contact:string = '';
  isSubmitting:boolean = false;
  validationErrors:any = [];
 
  constructor(public userAuthService: UserAuthService, private router: Router) {}
 
  ngOnInit(): void { }
 
  registerAction() {
    this.isSubmitting = true;
    let payload = {
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
      contact:this.contact
    }

    this.userAuthService.register(payload)
    .then(({data}) => {
      console.log(data);
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.contact = '';
      this.isSubmitting = false;
      return data;
    }).catch(error => {
      this.isSubmitting = false;
      if (error.response.data.errors != undefined) {
        this.validationErrors = error.response.data.errors
      }
      
      return error
    })
    
  }
}