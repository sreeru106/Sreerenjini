import { Component ,OnInit } from '@angular/core';

import { Employee } from './employee';

import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-employees',
template: `	<h2>Employee Details</h2>
			<ul class="employees">
      <li *ngFor="let employee of employees"
        [class.selected]="employee === selectedEmployee"
        (click)="onSelect(employee)">
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    </ul>
	<emp-detail [employee]="selectedEmployee"></emp-detail>`
})

export class EmoployeeComponent implements OnInit{
	employees: Employee[];
	selectedEmployee: Employee;
	constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
	  this.employees=this.employeeService.getEmployees();
  }
  
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

}