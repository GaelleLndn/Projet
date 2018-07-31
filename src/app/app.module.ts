import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// CUSTOM MODULES
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';


import { HomeComponent } from './home/home.component';
import { LogsListComponent } from './logs/logs-list/logs-list.component';
import { LogAddFormComponent } from './logs/log-add-form/log-add-form.component';

import { AuthenticationComponent } from './authentication/authentication.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LogsListComponent,
    AuthenticationComponent,
    HomeComponent,
    LogAddFormComponent,
    LogDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    MaterialModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
