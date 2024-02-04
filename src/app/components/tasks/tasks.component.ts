import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

interface Task {
  service: string;
  duration: string;
  serviceId: string;
}

interface Employee {
  name: string;
  tasks: Task[];
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [DemoFlexyModule,MatTableModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  employees: Employee[] = [
    {
      name: 'Employee 1',
      tasks: [
        { service: 'Service A', duration: '2 hours', serviceId: 'serviceA' },
        { service: 'Service B', duration: '1.5 hours', serviceId: 'serviceB' }
      ]
    },
    {
      name: 'Employee 2',
      tasks: [
        { service: 'Service C', duration: '3 hours', serviceId: 'serviceC' },
        { service: 'Service D', duration: '2 hours', serviceId: 'serviceD' }
      ]
    },
    {
      name: 'Employee 3',
      tasks: [
        { service: 'Service C', duration: '3 hours', serviceId: 'serviceC' },
        { service: 'Service D', duration: '2 hours', serviceId: 'serviceD' }
      ]
    }
    // Ajoutez d'autres employés au besoin
  ];
}
