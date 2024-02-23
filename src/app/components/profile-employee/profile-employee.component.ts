import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-profile-employee',
  standalone: true,
  imports:[DemoFlexyModule,CommonModule,NgClass,FormsModule,FeatherModule],
  templateUrl: './profile-employee.component.html',
  styleUrls: ['./profile-employee.component.scss']
})
export class ProfileEmployeeComponent {
  isVisibleFrom: boolean = false;
  isFormEditPassword: boolean = false;
  isFormEdit:boolean = false;
  errorMessage = '';  
  emp = {
    firstName: '',
    lastName: '',
    email:'',
    role:'Employee',
    contact:'',
    confirmPassword:'',
    password:''
  }
  onSumbit(){

  }

  onClose(){

  }
}
