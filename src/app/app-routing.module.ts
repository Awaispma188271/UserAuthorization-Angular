import { EmployeeSurveyComponent } from './employee-survey/employee-survey.component';
import { EmployeeGuard } from './employee.guard';
import { AdminComponent } from './admin/admin.component';

import { RegisterComponent } from './component/header/register/register.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './component/header/login/login.component';
import { NavBarComponent } from './component/header/nav-bar/nav-bar.component';
import { FillSurveyComponent } from './component/header/fill-survey/fill-survey.component';
import { AuthGuard } from './auth.guard';
import { UserRoles } from './app.enums';
import { MainComponent } from './component/header/main/main.component';
import { StudentGuard } from './student.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },

  {
    path: 'user/login',
    component: LoginComponent,
  },
  {
    path: 'user/register',
    component: RegisterComponent,
   
  },
  {
    path: 'user/fill-survey',
    component: FillSurveyComponent,
    canActivate: [StudentGuard],
  },
  {
    path: 'Admin',
    component: AdminComponent,
    
  },
  {
    path: 'Employee-Survey',
    component: EmployeeSurveyComponent,
    canActivate: [EmployeeGuard],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
