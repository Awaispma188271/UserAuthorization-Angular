import { SignupService } from './../service/signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-survey',
  templateUrl: './employee-survey.component.html',
  styleUrls: ['./employee-survey.component.css']
})
export class EmployeeSurveyComponent implements OnInit {

  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
  }
  
  isLogOut(){
    this.signupService.isLogOut();
  }

}
