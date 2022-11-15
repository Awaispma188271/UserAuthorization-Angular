import {  Router } from '@angular/router';
import { SignupService, SurveyResponse, User } from './../../../service/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRoles } from 'src/app/app.enums';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[SignupService]
})
export class RegisterComponent implements OnInit {

  public SignupForm!: FormGroup;
  UserData:any[]=[];
  formData:any;
  displayMsg: string="";
  isAccountCreated:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private signupService:SignupService,
    private route: Router
   
  ) { }

  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      Student_Name : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-zA-Z].*"),
      
      ])],
      Father_Name : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-zA-Z].*"),
      
      ])],
      Gender : [(''),Validators.compose([
        Validators.required,
        
        
      
      ])],
      DOB : [(''),Validators.compose([
        Validators.required,
        
        
      
      ])],
      CNIC : [(''),Validators.compose([
        
        // Validators.minLength(13),
        // Validators.pattern("[0-9]"),
      
      ])],
      Contact_1 : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.pattern("[0-9]"),
      
      ])],
      Contact_2 : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.pattern("[0-9]"),
      
      ])],
      District : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.pattern("[a-zA-Z].*"),
      
      ])],
      Registration_No : [(''),Validators.compose([
        Validators.required,
       
        Validators.pattern("[a-zA-Z].*"),
      
      ])],
      
    
      Email: [null, Validators.compose([
        Validators.required,
         Validators.email
        ])],
     
     
      Password : [(''),Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],     
      IsStudent : [(false)],
     
        
    });
    
  }
  // comparePasswords(formBuilder: FormGroup){
  //   var confirmPswdCtrl:any = formBuilder.get("ConfirmPassword");
  //   if(confirmPswdCtrl.errors == null || 'passwordMismatch' in confirmPswdCtrl.errors)
  //   {
  //     if(formBuilder.get("Password")?.value != confirmPswdCtrl.value)
  //     confirmPswdCtrl.setErrors({passwordMismatch:true});
  //     else
  //     confirmPswdCtrl.setErrors({passwordMismatch:false});
  //   }
    
      
  // }

  //orignal submit
  submit(){
  this.formData=this.SignupForm.value;
  this.UserData.push(this.formData);
    //console.log('UserFormData',this.UserData);

    var user: User = this.SignupForm.value;
    console.log(user);
    
    this.signupService.register(user).subscribe((res: SurveyResponse) =>{
      console.log("res",res);
      
      if(res.Success){
        alert("Account Created Successfully");
       // this.isAccountCreated = true;
       this.route.navigateByUrl('/user/login');
       this.SignupForm.reset();
       

        
      }
      // else if(res=='AlreadyExist'){
       
      //  // this.isAccountCreated = false;
      //  alert("User already exists from this email");
      //  this.SignupForm.reset();
      // }
      else{
        //this.displayMsg ="Something Went Wrong";
        this.isAccountCreated = false;
        this.SignupForm.reset();
        alert("Something Went Wrong. " + res.ErrorMessage);
      }

      

      // ------------------------------------
      // if(dataFromPost.succeeded){
      //   this.SignupForm.reset();
      // }
      // else{  
      //   dataFromPost.errors.forEach((element: { code: any; }) => {
      //     switch (element.code) {
      //       case "DublicatedUserName":
      //         alert("username already exist");
      //         break;
          
      //       default:
      //         //registeration failed
      //         break;
      //     }  
      //   });
      // }
      
    })
    // var isStudent = this.signupService.getUserRoleId() == UserRoles.Student;
    // console.log("isStudent",isStudent);
   
  }

  // submit(){
  //   alert("Registration Success");
  // }
  get studentName(): FormGroup{
    return this.SignupForm.get("Student_Name") as FormGroup;
  }
  get fatherName(): FormGroup{
    return this.SignupForm.get("Father_Name") as FormGroup;
  }
  get gender(): FormGroup{
    return this.SignupForm.get("Gender") as FormGroup;
  }
  get cnic(): FormGroup{
    return this.SignupForm.get("CNIC") as FormGroup;
  }
  get contact1(): FormGroup{
    return this.SignupForm.get("Contact_1") as FormGroup;
  }
  get contact2(): FormGroup{
    return this.SignupForm.get("Contact_2") as FormGroup;
  }
  get district(): FormGroup{
    return this.SignupForm.get("District") as FormGroup;
  }
  get reg(): FormGroup{
    return this.SignupForm.get("Registration_No)") as FormGroup;
  }
  get userName(): FormGroup{
    return this.SignupForm.get("UserName") as FormGroup;
  }
  get email(): FormGroup{
    return this.SignupForm.get("Email") as FormGroup;
  }
  get password(): FormGroup{
    return this.SignupForm.get("Password") as FormGroup;
  }
  get fullName(): FormGroup{
    return this.SignupForm.get("FullName") as FormGroup;
  }


}
