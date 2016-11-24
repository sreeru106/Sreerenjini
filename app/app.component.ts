import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<a routerLink="/dashboard" class ='subHeading'>Dashboard</a>
				<a routerLink="/employees" class ='subHeading'>Employees</a>
			  <router-outlet></router-outlet>`
	
})
export class AppComponent{
	title = 'Employee Management System';
}