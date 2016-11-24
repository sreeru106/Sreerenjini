import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {EmoployeeComponent} from './employees.component';
import { EmpDetialsComponent } from './emp-detail.component';

const routes:Routes = [
					{
						path: '',
						redirectTo: '/dashboard',
						pathMatch: 'full'
					},
					{
						path: 'employees',
						component: EmoployeeComponent
					},
					{
						path: 'dashboard',
						component: DashboardComponent
					},
					{
						path: 'detail/:id',
						component: EmpDetialsComponent
					}
					];
					
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}