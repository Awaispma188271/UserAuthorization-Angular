import { Route, Router } from '@angular/router';
import {
  SignupService,
  SurveyResponse,
  User,
} from './../service/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SignupService],
})
export class AdminComponent implements OnInit {
  public Students: any;
  //public IsApproved!: boolean;

  public adminForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private route: Router
  ) {}

  ngOnInit(): void {
      
    this.signupService.getUser().subscribe((res) => {
      this.Students = res;
      console.log('Students', this.Students);
    });
    this.adminForm = this.formBuilder.group({
      IsApproved: [('true')],
    });
  }

  public Accepted($event: any) {
   var Studentid=$event.target.id;
    alert("Your Request has been accepted Successfully");
     this.signupService.studentAccept(Studentid).subscribe(res =>{
       console.log("Student Response", res);           
     })
    console.log($event.target.id);
  }
  public Decline($event: any) {
    //this.IsApproved = false;
  }
}
