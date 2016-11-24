
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { EmpDetialsComponent } from './emp-detail.component';
import {EmployeeService} from './employee.service';
import {EmoployeeComponent} from './employees.component';
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 	BrowserModule,
					FormsModule,
					AppRoutingModule
				],
  declarations: [ AppComponent ,EmpDetialsComponent,EmoployeeComponent,DashboardComponent],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }