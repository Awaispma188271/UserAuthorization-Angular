import { UserRoles } from './../app.enums';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private baseURL: string = 'https://localhost:44377/api/User/';
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private route: Router) {}
  

  public register(user: User): Observable<SurveyResponse> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<SurveyResponse>(this.baseURL + 'createRegisterUser', user, {
      headers: headers
    });
  }
  public allUsers(user: User): Observable<SurveyResponse> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<SurveyResponse>(this.baseURL + 'createRegisterUser', user, {
      headers: headers
    });
  }
  public getUser(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseURL + 'getUser', {
      headers: headers
    });
  }
  public studentAccept(id:number){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'studentAccept/'+id, id, {
      headers: headers
    });
  }

  login(user: Array<string>): Observable<any> {
   

    return this.http.post(
      this.baseURL + 'loginUser', {
        email: user[0],
        password:user[1]
      },{
        responseType:'text',
      }
    
    );
  }
  setToken(token: string) {
    localStorage.setItem('Token', token);
    // this.loadCurrentUser();
  }

  // loadCurrentUser(){
  //   const token = localStorage.getItem("Token");
  //   const userInfo = token != null ? this.jwtHelperService.decodeToken(token):null;
  //   // const data = userInfo ?{
  //   //   id:userInfo.id,
  //   //   UserName:userInfo.UserName,
  //   //   Email:userInfo.Email,
  //   //   FullName:userInfo.FullName
  //   // }:null

  //   this.currentUser.next(userInfo);
  //   console.log(userInfo);

  // }
  isLoggin(): boolean {
    return localStorage.getItem('Token') ? true : false;
  }

  isLogOut() {
    localStorage.removeItem('Token');
    this.route.navigateByUrl('/user/login');
  }

  private getDecodedToken(): any {
    var token:any = localStorage.getItem('Token');
   
    var decodedToken = this.jwtHelperService.decodeToken(token);
    return decodedToken;
  }
 

 
  public getUserRoleId(): string {
    var decodedToken = this.getDecodedToken();
    return decodedToken?.RoleId;
  }
  

 

 
}

export class User {
  UserId!: number;
  Student_Name!:string;
  Father_Name!:string;
  Gender!:string;
  DOB!:string;
  CNIC!:number;
  Contact_1!:number;
  Contact_2!:number;
  District!: string;
  Registration_No!:string;
  Email!: string;
  IsStudent!: boolean;
}

export class SurveyResponse {
  Success!: boolean;
  ErrorMessage!: string;
}
export class LoginUser {
 
  Email!: string;
  
  isApproved!: boolean;
}

