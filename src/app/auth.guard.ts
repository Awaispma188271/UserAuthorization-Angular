import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from './service/signup.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isLoggin: boolean = true;

  constructor(private route: Router, private signupService: SignupService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var authorization = this.signupService.isLoggin();
    if (authorization) {
      return true;
    } else {
      alert('Login is required');
      return this.route.createUrlTree(['/user/login']);
    }
    return authorization;
  }
}
