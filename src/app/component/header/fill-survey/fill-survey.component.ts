import { SignupService } from './../../../service/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRoles } from 'src/app/app.enums';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css'],
  providers:[SignupService]
})
export class FillSurveyComponent implements OnInit {
  public SurveyForm!: FormGroup;
  userName:string='';
  surveyData:any[]=[];
  Email:string='';
  value:any;
  constructor(private signupService:SignupService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.SurveyForm = this.formBuilder.group({
      // gender: ['', Validators.required],
      Question_1 : ['',Validators.required],
      Question_2 : ['',Validators.required],
      Question_3 : ['',Validators.required],
      Question_4 : ['',Validators.required],
      Question_5 : ['',Validators.required],
      Question_6 : ['',Validators.required],
      Question_7 : ['',Validators.required],
      Question_8 : ['',Validators.required],
      Question_9 : ['',Validators.required],
      Question_10 : ['',Validators.required],
      Question_11 : ['',Validators.required],
      Question_12 : ['',Validators.required],
      Question_13 : ['',Validators.required],
      Question_14 : ['',Validators.required],
      Question_15 : ['',Validators.required],
      Question_16 : ['',Validators.required],
      Question_17 : ['',Validators.required],
      Question_18 : ['',Validators.required],
      Question_19 : ['',Validators.required],
      Question_20 : ['',Validators.required],
      Question_21 : ['',Validators.required],
      Email: ['', Validators.compose([
        Validators.required,
         Validators.email
        ])],
      
       
    
        
    });
 
      this.userName = this.SurveyForm.value.Email;
      console.log('userName',this.userName);
      
    
  }
  onSubmit(){
    this.value = this.SurveyForm.value;
  
    this.surveyData.push(this.value);
    this.SurveyForm.reset();
    console.log(this.surveyData);
    
   
    
  }



  isLogOut(){
    this.signupService.isLogOut();
  }

  get email(): FormGroup{
    return this.SurveyForm.get('Email') as FormGroup;
  }
}
