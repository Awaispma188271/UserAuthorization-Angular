import { LoginUser, SignupService, User, SurveyResponse } from './../../../service/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[SignupService]
 
})
export class LoginComponent implements OnInit {

  public LoginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router :Router,private signupService:SignupService) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      
      Email: [null, Validators.compose([
        Validators.required,
         Validators.email
        ])],
     
        Password : [(''),Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])],
        
     
        
    });
    
  }
  submit(){
    //var loginUser:LoginUser = this.LoginForm.value;
    this.signupService.login([
      this.LoginForm.value.Email,
      this.LoginForm.value.Password
    ])
    .subscribe((res) =>{
      if(res == 'Failure'){
        alert('Wrong Password');
        this.LoginForm.reset();
        
        

      }
      else{
        this.signupService.setToken(res); 
        alert("Login Successfully");
        this.router.navigate(['/user/fill-survey']);
        this.LoginForm.reset();
        
      }
    })
  }
  // submit(){
  //   alert("Form Submitted Successfully");
  // }
  get email(): FormGroup{
    return this.LoginForm.get('Email') as FormGroup;
  }
  get password(): FormGroup{
    return this.LoginForm.get('Password') as FormGroup;
  }

}
