import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { LogsListComponent } from '../logs/logs-list/logs-list.component';
import { LogDetailsComponent } from '../logs/log-details/log-details.component';
import { LogAddFormComponent } from '../logs/log-add-form/log-add-form.component';



const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'logs/add', component: LogAddFormComponent},
  { path: 'logs/:id', component: LogDetailsComponent },
  { path: 'logs', component: LogsListComponent },


];

@NgModule({
exports: [ RouterModule ],
imports: [ RouterModule.forRoot(ROUTES) ]
})

export class RoutingModule { }


