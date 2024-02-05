import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

interface Employer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const tabEmployer: Employer[] = [
  {
    _id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  {
    _id: "2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
  },
  {
    _id: "3",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
  },
]

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [DemoFlexyModule,MatTableModule,CommonModule],
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent {
  employers: Employer[] = tabEmployer;
  isVisibleFrom = false;
  selectedEmp: Employer | undefined;

  constructor(){
  }

  opneEdit(EmpId: string):void{
    this.selectedEmp = this.employers.find((app)=>app._id === EmpId);
    this.isVisibleFrom = true;
  }

  delete(EmpId: string):void{
    const index = this.employers.findIndex((app)=>app._id === EmpId);
    if(index !== -1){
      this.employers.splice(index, 1);
    }

  }

  openNewEmployer(){
    this.selectedEmp = undefined;
    this.isVisibleFrom = true;
  }

  closeNewEmployer(){
    this.isVisibleFrom = false;
  }
}
