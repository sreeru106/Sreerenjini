import { Injectable } from '@angular/core';
import {EMPLOYEES} from './mock-employees';
import { Employee } from './employee'; 

let employeesPromise = Promise.resolve(EMPLOYEES);

@Injectable()
export class EmployeeService {
	
	getEmployees() {
		
		return (EMPLOYEES);
	}
	getEmployee(id: number) : Promise<Employee> {
		console.log('iddd'+id);
		 return employeesPromise
      .then(employees => employees.find(employee => employee.id === +id));
	}
	
}