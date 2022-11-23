import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardsGuard implements CanActivate {
  jwtValid = false;
  constructor(
    public authService: AuthService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.checkJwt();
    // console.log(this.jwtValid);
    // if (this.jwtValid) {
    //   return true;
    // };
    // return false;
    return true;
  }

  async checkJwt() {
    const jwt = localStorage.getItem('jwt');
    return this.authService.isJwtValid(jwt).subscribe(async (res: any) => {
      console.log(res);
      if (res === true) {
        this.jwtValid = true;
      }
      this.jwtValid = false;
    });

  }
}
