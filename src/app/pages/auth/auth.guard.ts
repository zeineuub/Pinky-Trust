import { Injectable } from '@angular/core';
import {  CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean>  | boolean{
    /* we don't won't to hardcoded it so we use the service auth he can
    access the page unless he is authenticated */
    if (!this.authService.UserAuth)
    {
      this.router.navigateByUrl('/welcome');
    }
    return this.authService.UserAuth;  }

}
