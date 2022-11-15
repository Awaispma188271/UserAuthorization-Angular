import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/header/nav-bar/nav-bar.component';
import { MainComponent } from './component/header/main/main.component';
import { LoginComponent } from './component/header/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './component/header/register/register.component';
import { FillSurveyComponent } from './component/header/fill-survey/fill-survey.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeSurveyComponent } from './employee-survey/employee-survey.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    FillSurveyComponent,
    AdminComponent,
    EmployeeSurveyComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
