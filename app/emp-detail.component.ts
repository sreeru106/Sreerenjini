import {Component, Input, OnInit} from '@angular/core';
import { Employee } from './employee';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {EmployeeService} from './employee.service';
import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'emp-detail',
	templateUrl: 'emp-detail.component.html',
})

export  class EmpDetialsComponent implements OnInit{
	constructor(
		  private employeeService: EmployeeService,
		  private route: ActivatedRoute,
		  private location: Location
		) {}
		ngOnInit(): void {
			this.route.params
			.switchMap((params: Params) => this.employeeService.getEmployee(params['id']))
			.subscribe(employee => this.employee = employee);
		}
		goBack(): void {
			this.location.back();
		}
	 @Input()
	employee: Employee;
}