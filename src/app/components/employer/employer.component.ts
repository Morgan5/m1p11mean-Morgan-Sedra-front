import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { EmployerService } from './employer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [DemoFlexyModule,MatTableModule,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent {
  employees: any[] = [];
  isVisibleFrom = false;
  newEmp = {
    firstName: '',
    lastName: '',
    email:'',
    password:''
  }
  editingEmp: any = null;

  constructor(private employeeService: EmployerService){}

  ngOnInit():void{
    this.loadEmployee();
  }

  loadEmployee(){
    this.employeeService.getAllEmployee().subscribe((employees)=>{
      this.employees = employees;
      console.log(employees);
    });
  }

  onSumbit(){
    if(this.editingEmp){
      this.employeeService.updateEmployee(this.editingEmp._id,this.newEmp).subscribe(
        (response)=>{
          this.loadEmployee();
          console.log('Employee modifié avec succès :',response);
        },
        (error)=>{
          console.log('Erreur lors de la modification de l\'employee :',error);
        }
      )
      this.newEmp = {
        firstName: '',
        lastName: '',
        email:'',
        password:''
      }
      this.editingEmp = null;
      this.isVisibleFrom = false;
    }
    else{
      this.employeeService.createEmployee(this.newEmp).subscribe(
        (response)=>{
          this.loadEmployee();
          this.isVisibleFrom = false;
          console.log('Employer cree avec successe',response);
        },
        (error)=>{
          console.log('Erreur lors de creation de l\'employee',error);
        }
      )
    }
  }

  onEdit(emp: any):void{
    this.newEmp = {...emp};
    this.editingEmp = emp;
    this.isVisibleFrom = true;
  }

  onDelete(empId: string):void{
    this.employeeService.deleteEmployee(empId).subscribe(
      (response)=>{
        this.loadEmployee();
        console.log('Employer supprimer avec successe',response);
      },
      (error)=>{
        console.log('Erreur lors de creation de l\'employee',error);
      }
    )
  }

  openNewEmployer(){
    this.newEmp = {
      firstName: '',
      lastName: '',
      email:'',
      password:''
    }
    this.isVisibleFrom = true;
  }

  closeNewEmployer(){
    this.isVisibleFrom = false;
  }
}
